/**
 * /feed.xml — alias of /rss.xml for broader importer support.
 * Route segment config must be declared directly (Next can't re-export it).
 */
export { GET } from "../rss.xml/route";

export const dynamic = "force-static";
