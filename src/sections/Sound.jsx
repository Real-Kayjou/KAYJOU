import { SPOTIFY_TRACKS } from '../data/content'
import metroFeel from '../assets/images/metro_feel.png'
import spiderMark from '../assets/images/SPOTIFY.png'
import player from '../assets/images/bgclear_transparent_original__1_.png'
import SpotifyEmbed from '../components/SpotifyEmbed'

export default function Sound() {
  return (
    <section
      id="sound"
      className="relative px-5 sm:px-10 py-28 overflow-hidden flex flex-col items-center text-center"
    >
      <img
        src={metroFeel}
        alt=""
        className="pointer-events-none select-none absolute -right-32 top-0 w-[560px] opacity-10 z-0"
      />
      <img
        src={player}
        alt=""
        className="pointer-events-none select-none absolute -left-24 bottom-0 w-[420px] opacity-10 z-0 hidden lg:block"
      />

      <div className="relative z-10 flex flex-col items-center mb-14">
        <img src={spiderMark} alt="" className="w-10 h-10 opacity-90 mb-3" />
        <p className="tag-eyebrow text-xs text-crimson-glow">on repeat</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl">Sound</h2>
      </div>

      <div className="relative z-10 w-full max-w-2xl glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          {SPOTIFY_TRACKS.map((track) => (
            <SpotifyEmbed key={track.title} {...track} />
          ))}
        </div>
      </div>
    </section>
  )
}
