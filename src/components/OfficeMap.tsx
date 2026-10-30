export default function OfficeMap() {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
      <iframe
        src="https://my.atlist.com/map/9c638001-09da-4127-a284-dadf33cb2bf6?share=true"
        allow="geolocation 'self' https://my.atlist.com"
        width="100%"
        height="500px"
        loading="lazy"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        id="atlist-embed"
        title="Techno Brain Global Locations Map"
      />
    </div>
  );
}