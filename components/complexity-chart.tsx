'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

interface Props {
  timeComplexity: string;
  spaceComplexity: string;
}

const W = 320;
const H = 180;
const PAD = { top: 12, right: 16, bottom: 36, left: 36 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;
const N = 60; // sample points

const CURVES = [
  {
    id: 'O(1)',
    label: 'O(1)',
    color: '#38bdf8',
    fn: () => 0.02,
    keywords: ['O(1)', 'constant'],
  },
  {
    id: 'O(log n)',
    label: 'O(log n)',
    color: '#4ade80',
    fn: (x: number) => Math.log2(x + 1) / Math.log2(N + 1),
    keywords: ['O(log n)', 'log n', 'logarithmic'],
  },
  {
    id: 'O(n)',
    label: 'O(n)',
    color: '#fcd34d',
    fn: (x: number) => x / N,
    keywords: ['O(n)', 'linear', 'O(V + E)', 'O(V+E)', 'O(h)'],
  },
  {
    id: 'O(n log n)',
    label: 'O(n log n)',
    color: '#ff6535',
    fn: (x: number) => (x * Math.log2(x + 1)) / (N * Math.log2(N + 1)),
    keywords: ['O(n log n)', 'n log n', 'nlogn'],
  },
  {
    id: 'O(n²)',
    label: 'O(n²)',
    color: '#fb7185',
    fn: (x: number) => (x / N) ** 2,
    keywords: ['O(n²)', 'O(n^2)', 'O(n2)', 'quadratic', 'O(n × W)', 'O(n×W)'],
  },
] as const;

const atNLabels: Record<string, (n: number) => string> = {
  en: (n) => `AT N = ${n}`,
  fr: (n) => `POUR N = ${n}`,
  es: (n) => `PARA N = ${n}`,
  de: (n) => `BEI N = ${n}`,
  ja: (n) => `N = ${n} のとき`,
  zh: (n) => `当 N = ${n} 时`,
  ar: (n) => `عند N = ${n}`,
  hi: (n) => `N = ${n} पर`,
  hinglish: (n) => `N = ${n} pe`,
};

const rangeLabels: Record<string, string> = {
  en: 'range 1-20',
  fr: 'plage 1-20',
  es: 'rango 1-20',
  de: 'bereich 1-20',
  ja: '範囲 1-20',
  zh: '范围 1-20',
  ar: 'النطاق 1-20',
  hi: 'range 1-20',
  hinglish: 'range 1-20',
};

function matchesCurve(complexity: string, keywords: readonly string[]): boolean {
  const c = complexity.toLowerCase().replace(/\s+/g, '');
  return keywords.some((k) => c.includes(k.toLowerCase().replace(/\s+/g, '')));
}

function buildPath(fn: (x: number) => number): string {
  const pts = Array.from({ length: N + 1 }, (_, i) => {
    const x = PAD.left + (i / N) * PLOT_W;
    const y = PAD.top + PLOT_H - fn(i) * PLOT_H;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return pts.join(' ');
}

export function ComplexityChart({ timeComplexity, spaceComplexity }: Props) {
  const t = useTranslations('Playground');
  const locale = useLocale();
  const [nValue, setNValue] = useState<number>(8);
  const paths = useMemo(() => CURVES.map((c) => buildPath(c.fn)), []);

  const highlighted = useMemo(
    () =>
      CURVES.map((c) => ({
        ...c,
        activeTime: matchesCurve(timeComplexity, c.keywords),
        activeSpace: matchesCurve(spaceComplexity, c.keywords),
      })),
    [timeComplexity, spaceComplexity],
  );

  // grid lines
  const gridY = [0.25, 0.5, 0.75, 1.0].map((t) => PAD.top + PLOT_H - t * PLOT_H);
  const gridX = [0.25, 0.5, 0.75, 1.0].map((t) => PAD.left + t * PLOT_W);
  const atNLabel = (atNLabels[locale] ?? atNLabels.en)(nValue);
  const rangeLabel = rangeLabels[locale] ?? rangeLabels.en;

  return (
    <div className="space-y-3">
      {/* Chart */}
      <div className="rounded-[16px] overflow-hidden bg-[#0f172a] p-1">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block" aria-label="Big O complexity curves">
          {/* Grid lines */}
          {gridY.map((y) => (
            <line key={y} x1={PAD.left} y1={y} x2={PAD.left + PLOT_W} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          ))}
          {gridX.map((x) => (
            <line key={x} x1={x} y1={PAD.top} x2={x} y2={PAD.top + PLOT_H} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          ))}

          {/* Axes */}
          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + PLOT_H} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1={PAD.left} y1={PAD.top + PLOT_H} x2={PAD.left + PLOT_W} y2={PAD.top + PLOT_H} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x={PAD.left + PLOT_W / 2} y={H - 4} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)">
            n (input size)
          </text>
          <text
            x={10}
            y={PAD.top + PLOT_H / 2}
            textAnchor="middle"
            fontSize="9"
            fill="rgba(255,255,255,0.35)"
            transform={`rotate(-90, 10, ${PAD.top + PLOT_H / 2})`}
          >
            ops
          </text>

          {/* Curves — draw dim ones first, then highlighted */}
          {highlighted.map((c, i) => {
            const isActive = c.activeTime || c.activeSpace;
            return (
              <path
                key={c.id}
                d={paths[i]}
                fill="none"
                stroke={c.color}
                strokeWidth={isActive ? 2.5 : 1}
                opacity={isActive ? 1 : 0.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}

          {/* nValue vertical marker */}
          {(() => {
            const markerX = PAD.left + (nValue / 20) * PLOT_W;
            const tIdx = (nValue / 20) * N;
            return (
              <>
                <line
                  x1={markerX}
                  y1={PAD.top}
                  x2={markerX}
                  y2={PAD.top + PLOT_H}
                  stroke="rgba(255,255,255,0.30)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                {highlighted
                  .filter((c) => c.activeTime || c.activeSpace)
                  .map((c) => {
                    const yPos = PAD.top + PLOT_H - c.fn(tIdx) * PLOT_H;
                    return <circle key={`dot-${c.id}`} cx={markerX} cy={yPos} r={3} fill={c.color} stroke="rgba(0,0,0,0.5)" strokeWidth="1" />;
                  })}
              </>
            );
          })()}

          {/* Active curve labels */}
          {highlighted
            .filter((c) => c.activeTime || c.activeSpace)
            .map((c, i) => {
              // label at x=70% of plot
              const xPos = PAD.left + 0.7 * PLOT_W;
              const xIdx = Math.round(0.7 * N);
              const yNorm = c.fn(xIdx);
              const yPos = PAD.top + PLOT_H - yNorm * PLOT_H - 8;
              return (
                <text
                  key={`lbl-${c.id}-${i}`}
                  x={xPos}
                  y={Math.max(PAD.top + 8, Math.min(PAD.top + PLOT_H - 4, yPos))}
                  fontSize="8"
                  fill={c.color}
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {c.label}
                </text>
              );
            })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {highlighted.map((c) => {
          const isActive = c.activeTime || c.activeSpace;
          return (
            <div
              key={c.id}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${
                isActive ? 'bg-white/8' : 'opacity-35'
              }`}
            >
              <span className="h-2 w-2 rounded-full shrink-0" style={{ background: c.color }} />
              <span style={{ color: c.color }}>{c.label}</span>
              {c.activeTime && <span className="text-white/40 text-[9px]">{t('timeLabel').toLowerCase()}</span>}
              {c.activeSpace && <span className="text-white/40 text-[9px]">{t('spaceLabel').toLowerCase()}</span>}
            </div>
          );
        })}
      </div>

      {/* Interactive n slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] text-white/40">
          <span>n = {nValue}</span>
          <span>{rangeLabel}</span>
        </div>
        <input
          type="range"
          min={1}
          max={20}
          value={nValue}
          onChange={(e) => setNValue(Number(e.target.value))}
          className="w-full h-1 rounded-full appearance-none cursor-pointer"
          style={{ accentColor: '#ff6535' }}
        />
        {/* At-n table */}
        <div className="rounded-[12px] bg-[#0f172a] p-3">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">{atNLabel}</div>
          <table className="w-full text-[10px]">
            <thead>
              <tr className="text-white/30">
                <th className="text-left pb-1 font-medium">{t('complexity')}</th>
                <th className="text-right pb-1 font-medium">{t('operations')}</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {[
                { label: 'O(1)', value: '1', color: '#38bdf8' },
                { label: 'O(log n)', value: String(Math.round(Math.log2(nValue) * 10) / 10), color: '#4ade80' },
                { label: 'O(n)', value: String(nValue), color: '#fcd34d' },
                { label: 'O(n log n)', value: String(Math.round(nValue * Math.log2(nValue))), color: '#ff6535' },
                { label: 'O(n²)', value: String(nValue * nValue), color: '#fb7185' },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="py-0.5 font-mono" style={{ color: row.color }}>
                    {row.label}
                  </td>
                  <td className="py-0.5 text-right text-white/60 font-mono">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
