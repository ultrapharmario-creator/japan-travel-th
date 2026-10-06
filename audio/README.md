# Corrected warming pronunciation audio

These four files use Microsoft Edge Japanese voice `ja-JP-NanamiNeural`, generated with edge-tts 7.2.3 at its default rate, pitch and volume. The reference sample こんにちは matched the original clip duration and encoding; its energy envelope was substantially closer to Nanami than Keita. The original repository did not record its generator, so this comparison is evidence of a close match rather than byte-identical output.

Hiragana explicitly specifies 温めます as あたためます, rather than ぬくめます. The visible Japanese text retains its kanji spelling.

| File | Synthesis input |
| --- | --- |
| phrase-37.mp3 | お弁当をあたためますか |
| phrase-49.mp3 | かしこまりました。あたためます。 |
| phrase-67.mp3 | あたためます |
| phrase-91.mp3 | あたたかい |

Playback adds `?v=3` to these files to invalidate the earlier fallback voice. The temporary Open JTalk/Mei recordings have been replaced. Other audio files are unchanged. No runtime TTS service, dependency or credential is required: the site plays these bundled MP3 files.

## Request-building lessons

Files phrase-108.mp3 through phrase-116.mp3 use the same Nanami voice and default settings. Inputs in order: この (kono), その (sono), あの (ano), お (o, to explicitly pronounce the particle を as o), このお弁当 (kono obentou), そのお弁当 (sono obentou), あのお弁当 (ano obentou), そのお弁当をください (Sono obentou o kudasai), あのお弁当をください (Ano obentou o kudasai). The existing phrase-42.mp3 supplies このお弁当をください (Kono obentou o kudasai).
