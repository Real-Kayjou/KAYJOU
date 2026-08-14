/**
 * Renders a real Spotify track embed when a spotifyId is provided.
 * Falls back to a plain "not linked yet" card otherwise, so the
 * section never looks broken while track IDs are still being filled in.
 */
export default function SpotifyEmbed({ title, artist, spotifyId }) {
  if (!spotifyId) {
    return (
      <div className="glass-card rounded-xl p-4 flex flex-col justify-center h-20">
        <p className="font-display font-semibold text-sm">{title}</p>
        <p className="text-bone-dim text-xs tag-eyebrow">
          {artist || 'spotify link not set'}
        </p>
      </div>
    )
  }

  return (
    <iframe
      title={title}
      src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0`}
      width="100%"
      height="80"
      style={{ borderRadius: 12 }}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}
