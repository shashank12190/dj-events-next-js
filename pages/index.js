import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import Link from "next/link";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events &&
        events.slice(0, 3).map((evt) => <EventItem key={evt.id} evt={evt} />)}
      {events.length > 0 && (
        <Link className="btn-secondary" href={"/events"}>
          View All Events
        </Link>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: events,
  };
}
