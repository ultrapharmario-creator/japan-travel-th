# Website illustration set

All illustrations match the warm Japanese anime textbook style of `kore-sore-are.png` and `kono-sono-ano.png`. The coral-shirt tourist is the speaker and the green-apron clerk is the listener. Japanese/Romaji teaching text belongs in HTML, not the artwork.

- `travel-hero.webp`: welcoming tourist/store-clerk scene.
- `store-clerk.webp`: conversation-game character and counter background.
- `vocabulary-objects.webp`: four columns/four rows, left to right: bento, receipt, cloth tote, plastic bag; chopsticks, onigiri, water, card; spoon, fork, straw, tumbler; tea, coffee, bread, sandwich.
- `vocabulary-concepts.webp`: five columns/two rows: warming food, payment, declining a bag, accepting a bag, requesting; acknowledging, checkout, points, phone/app, one item.

`wordPicture()` in lessons.js selects the illustrated cell using CSS background sizing and positioning. The receipt position is slightly inset to avoid the adjacent lunch box edge. All 26 previously used vocabulary illustration types have explicit mappings; concepts shared by several words remain shared. Each picture has an accessible label. Interface icons remain separate from learning illustrations.

The WebP assets are lossless encodings of generated PNG artwork, preserving the original pixels. The original generated outputs are retained outside the checkout in /workspace/generated_images.
