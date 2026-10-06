# Website illustration set

All illustrations match the warm Japanese anime textbook style of `kore-sore-are.png` and `kono-sono-ano.png`. The coral-shirt tourist is the speaker and the green-apron clerk is the listener. Japanese/Romaji teaching text belongs in HTML, not the artwork.

- `travel-hero.webp`: welcoming tourist/store-clerk scene.
- `store-clerk.webp`: conversation-game character and counter background.
- `vocabulary-objects.webp`: four columns/four rows, left to right: bento, receipt, cloth tote, plastic bag; chopsticks, onigiri, water, card; spoon, fork, straw, tumbler; tea, coffee, bread, sandwich.
- `vocabulary-concepts.webp`: five columns/two rows: warming food, payment, declining a bag, accepting a bag, requesting; acknowledging, checkout, points, phone/app, one item.

`wordPicture()` in lessons.js selects the illustrated cell using CSS background sizing and positioning. The receipt position is slightly inset to avoid the adjacent lunch box edge. All vocabulary illustration types have explicit mappings. Distinct meanings use specific scenes rather than reusing generic objects or gestures. Each picture has an accessible label. Interface icons remain separate from learning illustrations.

The WebP assets are lossless encodings of generated PNG artwork, preserving the original pixels. The original generated outputs are retained outside the checkout in /workspace/generated_images.

## Specific vocabulary corrections

These three square sheets each have two columns and two rows. `specificArt` in lessons.js takes precedence over the original grids. All four positions are selected at 0% or 100%, with background size 200% × 200%.

- `vocabulary-commerce.webp`: top-left adding wrapped chopsticks into a shopping bag; top-right clerk giving change to the buyer; bottom-left a paid bag with money and price; bottom-right a free bag with a zero/gift indication.
- `vocabulary-people.webp`: top-left physical loyalty stamp card; top-right age/birthday; bottom-left examining identification to verify; bottom-right adults. The birthday example is illustrative and does not establish a legal age threshold.
- `vocabulary-food.webp`: top-left fully visible bento with safe space around its edges; top-right leaving the store with takeaway; bottom-left seated eating inside; bottom-right one onigiri with a numeral 1.

The bento override applies to both the standalone sentence-building lesson and vocabulary cards, as well as the game counter. Existing audio IDs and Romaji remain unchanged.

## Payment methods

`vocabulary-payment-methods.webp` has three equal columns in one row: blue chip credit card, phone digital-wallet/contactless payment, and a transit IC card tapping at a station gate. The specific mappings for IDs 81, 82, and 83 use grid metadata (3 columns, 1 row); all existing two-by-two mappings retain their defaults. Electronic money may also be stored on cards: the phone scene is an illustrative example. Existing audio and Romaji are unchanged.

## Cash, total and currency

`vocabulary-money.webp` has three equal columns: physical banknotes/coins for 現金 (genkin), adding item prices at checkout for 合計 (goukei), and the ¥ symbol/Japanese coin for 円 (en). Specific mappings for IDs 77–79 use three columns and one row. All existing audio IDs, Thai readings and Romaji remain unchanged.

## Requests and questions in context
`vocabulary-requests.webp` is a 3-column, 2-row sheet. Top row: requesting bento by name, pointing to a bottle near the customer, choosing one particular bento. Bottom row: clerk asking about a bag, clerk offering to warm bento while pointing at the microwave, customer requesting a bag from the clerk. Preserve the portrait 2:3 cell aspect ratio, and keep captions in HTML.

`vocabulary-requests-square.webp` supersedes the portrait sheet in the UI. It keeps the same six scenes in a landscape 3:2 atlas with square cells. Lesson and vocabulary illustrations share a 200px square maximum (190px on mobile). Preserve the older sheet and generated originals.
