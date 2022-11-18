interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    colors: number[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'top' | 'bottom' | 'one-pices' | 'unisex' | 'men' | 'women' | 'kid' | 'new' | 'new-bottom' | 'best_sellers'
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats' | 'top' | 'bottom' | 'one-pices';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: `The Maria top is your signature classic bikini that never not makes an impact, felt well past the moment of wearing. No hearts left untouched as you sway, cocktail in hand past envious eyes.
            Adjustable coverage with slidable cups that tie around the neck and back. Life is full simply because you radiate more fiercely. Vacay looks good on your babe.`,
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667135481/aneu/w4evvu1fnv1sf4jrjozy.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667062875/aneu/pw3d6o8om8b3l0j2m6jy.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064580/aneu/bahhrtsbd3m7t61bpd6h.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667135100/aneu/eba5infqvh3xqxkupvey.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667134793/aneu/meaqjlsh3veogplirsdc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064284/aneu/fd7yrc3eyrpkdk4lveol.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064382/aneu/thhxorogxmb95vkwppsa.webp'
            ],
            colors: [1, 2, 3, 4, 5],
            inStock: 7,
            price: 30,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "maria-top-citrus-floral",
            type: 'top',
            tags: ['sweatshirt', 'tops', 'new'],
            title: "MARIA TOP (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667063733/aneu/gx7lmwy0meptiqhwiymc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667135481/aneu/w4evvu1fnv1sf4jrjozy.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667062875/aneu/pw3d6o8om8b3l0j2m6jy.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064580/aneu/bahhrtsbd3m7t61bpd6h.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667135100/aneu/eba5infqvh3xqxkupvey.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667134793/aneu/meaqjlsh3veogplirsdc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064284/aneu/fd7yrc3eyrpkdk4lveol.webp',
            ],
            colors: [1, 2, 3, 4, 5],
            inStock: 5,
            price: 200,
            sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
            slug: "maria-bottom-citrus-floral",
            type: 'shirts',
            tags: ['jacket', 'tops', 'new'],
            title: "MARIA BOTTOM (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064730/aneu/onlpl6syv3to36w5scoz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/r1nxzbpua8gvxaheoyes.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/yaerlptjyghfuhzdnxrg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/qe58e8q8okrzkdbkpos0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/zkdg4jws4y9kzss1v0sc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/bseadylvdxbyqjwiwk2z.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/ogagrywcv2aofclxxcpu.webp',
            ],
            colors: [1, 3, 5],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            slug: "bali-top-citrus-floral",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "BALI TOP (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/qe58e8q8okrzkdbkpos0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/yaerlptjyghfuhzdnxrg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/ogagrywcv2aofclxxcpu.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/prbxebndqobe7ahyficx.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/zkdg4jws4y9kzss1v0sc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/bseadylvdxbyqjwiwk2z.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/r1nxzbpua8gvxaheoyes.webp'
            ],
            colors: [1, 3, 5],
            inStock: 50,
            price: 45,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: "bali-bottom-citrus-floral",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "BALI BOTTOM (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/r1nxzbpua8gvxaheoyes.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/yaerlptjyghfuhzdnxrg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/ogagrywcv2aofclxxcpu.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/prbxebndqobe7ahyficx.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/zkdg4jws4y9kzss1v0sc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/bseadylvdxbyqjwiwk2z.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667064731/aneu/r1nxzbpua8gvxaheoyes.webp'
            ],
            colors: [3, 5, 6],
            inStock: 50,
            price: 40,
            sizes: ['M', 'L', 'XL', 'XXL'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "Men's Turbine Short Sleeve Tee",
            gender: 'new'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/nscaf4ub4qdondbdlxa3.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065295/aneu/azqzcdluairevzlybbij.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065295/aneu/hczwqswbtvvvrjyqzzue.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/hh9cvdmo3oja20aobdbs.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/kzjzthwz2zfsopkvqvwi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/rkxpp9loq6qbhz0azic3.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/hmwkm04uwfrauhlhp6rq.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/nuizbloiokmf7bjfhr2q.webp'
            ],
            colors: [3, 5, 6],
            inStock: 0,
            price: 35,
            sizes: ['M', 'L', 'XL', 'XXL'],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "CAPRI TOP (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/nuizbloiokmf7bjfhr2q.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/hmwkm04uwfrauhlhp6rq.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/hh9cvdmo3oja20aobdbs.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065295/aneu/azqzcdluairevzlybbij.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/kzjzthwz2zfsopkvqvwi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/rkxpp9loq6qbhz0azic3.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/kzjzthwz2zfsopkvqvwi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065295/aneu/hczwqswbtvvvrjyqzzue.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667065296/aneu/nscaf4ub4qdondbdlxa3.webp'
            ],
            colors: [1],
            inStock: 15,
            price: 35,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "capri-bottom-citrus-floral",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "CAPRI BOTTOM (CITRUS FLORAL)",
            gender: 'new'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/rvekdj0gooy9ekwnxwak.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/om7ux7kk5lfq98a9ot9i.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066825/aneu/mcp5fwm8nsk4id4cdwdp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/krzwd1btr9up3xogxqaa.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/tuifcmdmcgmdq5dvdanp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/pwthkiirdydnpqpb1bbi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/hkaxf1lxnu8ph0lq5qgt.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/ahubr5q3rge2uyumiz2a.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/ab2g6umjlnnralmrkb3x.webp',
            ],
            colors: [1, 2, 4],
            inStock: 17,
            price: 35,
            sizes: ['XS', 'S', 'XL', 'XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "MARIA TOP (OCEAN DREAM)",
            gender: 'new'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/ab2g6umjlnnralmrkb3x.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067333/aneu/tsje7xalismijus97fba.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/tuifcmdmcgmdq5dvdanp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/hkaxf1lxnu8ph0lq5qgt.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/ahubr5q3rge2uyumiz2a.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066824/aneu/hkaxf1lxnu8ph0lq5qgt.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/pwthkiirdydnpqpb1bbi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/rvekdj0gooy9ekwnxwak.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667066823/aneu/om7ux7kk5lfq98a9ot9i.webp'
            ],
            colors: [3, 4, 5],
            inStock: 12,
            price: 35,
            sizes: ['XS', 'S', 'M'],
            slug: "maria-bottom-ocean-dream",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "MARIA BOTTOM (OCEAN DREAM)",
            gender: 'new'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067606/aneu/p1sy3qjybda5hqg8bk2t.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067605/aneu/vzwt3uzfffn2dxp4kzjc.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067606/aneu/jytbqinpe8rwxbw8hdrx.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067794/aneu/wcgdjqbyf0i8zn6pgmab.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067605/aneu/ejj8jnxw0s2eblfz8pls.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067605/aneu/foqqh17hgef7hhrermo6.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067606/aneu/rhajeox38ccoofgrf97q.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067605/aneu/tlkzklpcnex2bcucqqel.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667067606/aneu/furqodavq8tmw8whcwiq.webp'
            ],
            colors: [1],
            inStock: 5,
            price: 35,
            sizes: ['XS', 'S'],
            slug: "bali-top-ocean-dream",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "BALI TOP (OCEAN DREAM)",
            gender: 'new'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/kgzxifknqv2tbhmignqz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/mxibgko37tsjngysoyxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/ldbvvidlgnyrnvgwkdxz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068057/aneu/korhqmgtfepxtd6z5eis.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068057/aneu/koijt4lzeo5zdckexvad.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068056/aneu/mw5xkneiilgc8x62dk7m.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/mjiyoug5ovoemzbrop0y.webp',
            ],
            colors: [1],
            inStock: 2,
            price: 35,
            sizes: ['XS', 'S', 'M'],
            slug: "capri-top-ocean-dream",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "CAPRI TOP (OCEAN DREAM)",
            gender: 'new'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/mxibgko37tsjngysoyxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/kgzxifknqv2tbhmignqz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/ldbvvidlgnyrnvgwkdxz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068057/aneu/korhqmgtfepxtd6z5eis.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068057/aneu/koijt4lzeo5zdckexvad.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068056/aneu/mw5xkneiilgc8x62dk7m.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068058/aneu/mjiyoug5ovoemzbrop0y.webp',
            ],
            colors: [0],
            inStock: 82,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "capri-bottom-ocean-dream",
            type: 'shirts',
            tags: ['shirt', 'tops', 'new'],
            title: "CAPRI BOTTOM (OCEAN DREAM)",
            gender: 'new'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/s4d2sqtrcrc1picsokec.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068373/aneu/uoe5bm1pazn5xkr5nf2s.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/qd8g18hmgfpt1ylhgnbz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/qlmicoon5zc3nvtqqex9.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/jz9cdmz7rqbeekzbqone.webp'
            ],
            colors: [0],
            inStock: 24,
            price: 35,
            sizes: ['XL', 'XXL'],
            slug: "maria-top-night-floral",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "MARIA TOP (NIGHT FLORAL)",
            gender: 'new'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068650/aneu/kyfjotxeqxn4ejrlxroq.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/qlmicoon5zc3nvtqqex9.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068374/aneu/qd8g18hmgfpt1ylhgnbz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068373/aneu/uoe5bm1pazn5xkr5nf2s.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068645/aneu/xwwvlofonpl7mhmidozi.webp'
            ],
            colors: [3],
            inStock: 5,
            price: 30,
            sizes: ['XS', 'S', 'XXL'],
            slug: "maria-bottom-night-floral",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "MARIA BOTTOM (NIGHT FLORAL)",
            gender: 'new'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/wo36ikzzz8fv7ngjnlfw.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/jx7ikmqif0awjvyqpw6g.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068849/aneu/byuijptt7droedkc5v9u.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/smnrta8kgxrlt9pnpkm5.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068851/aneu/a8pjaddzuxwldwubsuzp.webp'
            ],
            colors: [4],
            inStock: 150,
            price: 30,
            sizes: ['M', 'L'],
            slug: "bali-top-flower-garden",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "BALI TOP (FLOWER GARDEN)",
            gender: 'new'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068851/aneu/a8pjaddzuxwldwubsuzp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/smnrta8kgxrlt9pnpkm5.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/jx7ikmqif0awjvyqpw6g.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068849/aneu/byuijptt7droedkc5v9u.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667068850/aneu/wo36ikzzz8fv7ngjnlfw.webp'
            ],
            colors: [3],
            inStock: 10,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "bali-bottom-flower-garden",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "BALI BOTTOM (FLOWER GARDEN)",
            gender: 'new'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/lbsebntplgafbbd4glwk.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071029/aneu/ycorup7tpvn81aaoqiiu.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/vnkik3t0mppaqzuakgk0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/hzn31btanzpd28v21qxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071029/aneu/tnlqaixzutcgydaugmha.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/r9xrefravghrgte5go76.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/fnyydadx1zqrboqcx8mt.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/ob61po891hwoxzuesstz.webp'
            ],
            colors: [0],
            inStock: 34,
            price: 35,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: "lily-top-sweet-vacay",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "LILY TOP (SWEET VACAY)",
            gender: 'men'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/ob61po891hwoxzuesstz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071029/aneu/ycorup7tpvn81aaoqiiu.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071029/aneu/tnlqaixzutcgydaugmha.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/hzn31btanzpd28v21qxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/vnkik3t0mppaqzuakgk0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/fnyydadx1zqrboqcx8mt.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/r9xrefravghrgte5go76.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071028/aneu/lbsebntplgafbbd4glwk.webp'
            ],
            colors: [0],
            inStock: 15,
            price: 40,
            sizes: ['XL', 'XXL'],
            slug: "lily-bottom-sweet-vacay",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "LILY BOTTOM (SWEET VACAY)",
            gender: 'men'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071381/aneu/focrgfdwtx8igmp1xigg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/feqp1zr49ohkg7fi5sii.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/uie9ypkbxyujxa99dosl.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/avfttizuy0rr8pcduoox.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/wryw7an17awd6kh2a7gl.webp'
            ],
            colors: [0],
            inStock: 12,
            price: 40,
            sizes: ['XS', 'XXL'],
            slug: "bali-top-night-floral",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "BALI TOP (NIGHT FLORAL)",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071541/aneu/wv15gkeay8l53ue8w99z.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/feqp1zr49ohkg7fi5sii.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/uie9ypkbxyujxa99dosl.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/avfttizuy0rr8pcduoox.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071380/aneu/wryw7an17awd6kh2a7gl.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071381/aneu/focrgfdwtx8igmp1xigg.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 115,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "bali-bottom-night-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers'],
            title: "BALI BOTTOM (NIGHT FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/kiy7uamfo0se6togwaqi.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071754/aneu/vq2zstuupp2r3qd1p9ew.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071756/aneu/qga3iivnaoovdg8hjsuz.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/tc7jl5ekjvjh9x6dj5sr.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/uw4h0v6ejphrf5ejaizm.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/zq1dirps0i84poofsj5j.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 130,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "maria-top-flower-garden  ",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers'],
            title: "MARIA TOP (FLOWER GARDEN)",
            gender: 'unisex'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/tc7jl5ekjvjh9x6dj5sr.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/zq1dirps0i84poofsj5j.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071755/aneu/uw4h0v6ejphrf5ejaizm.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667071754/aneu/vq2zstuupp2r3qd1p9ew.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072024/aneu/nndflcjune82g1p2s5mo.webp',
            ],
            colors: [0],
            inStock: 100,
            price: 85,
            sizes: ['XS', 'L', 'XL', 'XXL'],
            slug: "maria-bottom-flower-garden",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "MARIA BOTTOM (FLOWER GARDEN)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/zxzkbfzfuvtwwn26oktv.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072234/aneu/ykvy0335ijwmgfdgayqn.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/tqadbkjmiaacdw5pkrcs.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/mfj7b8giuic7tkbjlptg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072236/aneu/gjh8kvaysrfoxnlnieeq.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072236/aneu/kpo07mkhtxafiiwudmcn.jpg'
            ],
            colors: [4],
            inStock: 7,
            price: 85,
            sizes: ['XS', 'S', 'M'],
            slug: "bali-top-summer-floral",
            type: 'shirts',
            tags: ['shirt', 'best-sellers'],
            title: "BALI TOP (SUMMER FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072236/aneu/kpo07mkhtxafiiwudmcn.jpg',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/tqadbkjmiaacdw5pkrcs.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/mfj7b8giuic7tkbjlptg.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072234/aneu/ykvy0335ijwmgfdgayqn.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072235/aneu/zxzkbfzfuvtwwn26oktv.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667072236/aneu/gjh8kvaysrfoxnlnieeq.webp'
            ],
            colors: [3],
            inStock: 15,
            price: 85,
            sizes: ['XS', 'S', 'M', 'L'],
            slug: "bali-bottom-summer-floral",
            type: 'shirts',
            tags: ['shirt', 'best-sellers', 'new', 'new-bottoms'],
            title: "BALI BOTTOM (SUMMER FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/j75xjpuaq2lxdg3r1k8h.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/g1kkjcvvaxldxvwyurh0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/pfsejaluzuwcxt7ue9ec.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/g9fqosrixxhad60dst2b.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 115,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "sky-top-flower-garden",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "SKY TOP (FLOWER GARDEN)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/g9fqosrixxhad60dst2b.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/pfsejaluzuwcxt7ue9ec.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/g1kkjcvvaxldxvwyurh0.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667334699/aneu/j75xjpuaq2lxdg3r1k8h.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            slug: "sky-bottom-flower-garden",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'new-bottoms'],
            title: "SKY BOTTOM (FLOWER GARDEN)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335014/aneu/hafzup1nsqlceskgxtc9.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335014/aneu/osmphpyqk9rrssh65hzj.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335014/aneu/f7u55gatge8zpxnnkzxb.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335014/aneu/sonaelye7m0qudkhma5k.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335014/aneu/ngr4dvpgpzetqfnypczd.jpg'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M'],
            slug: "maria-top-lime",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "MARIA TOP (LIME)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/wugnxoerysfk470mor7k.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/soa629lz6zkf4cmry4gp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/hvwywcxltjsysiirpav3.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/hnfr0eufnyl83wk9iekh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/yi3duk6kvfc7h2sdh4su.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335245/aneu/r5gpgygc1abkgbbs18ru.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667335246/aneu/zoxmjdc1w9vzzwgtomvd.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "sky-top-sweet-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "SKY TOP (SWEET FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/vlf1rwjo0fxkug7peyue.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/i0wqcq68refsvc4eg7yr.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/ahpnshf0xzjhd6mwyp82.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336165/aneu/gtxr1jwfvtmgapvbe51b.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/xowzyuzm11mw8y2tae8e.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-top-yellow",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "BALI TOP (YELLOW)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/vlf1rwjo0fxkug7peyue.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/i0wqcq68refsvc4eg7yr.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/ahpnshf0xzjhd6mwyp82.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336165/aneu/gtxr1jwfvtmgapvbe51b.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336164/aneu/xowzyuzm11mw8y2tae8e.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-bottom-yellow",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'new-bottoms'],
            title: "BALI BOTTOM (YELLOW)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336466/aneu/l5ms6h6arnnr6ahmgpki.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336465/aneu/qhzfksgfco0uukxgfznd.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336466/aneu/mvkmlt46sl3cn7nhdo4q.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336465/aneu/vmsbuiyj2lhwsg9jky8z.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-top-bubble-gum",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "BALI TOP (BUBBLE GUM)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336465/aneu/vmsbuiyj2lhwsg9jky8z.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336465/aneu/qhzfksgfco0uukxgfznd.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336466/aneu/mvkmlt46sl3cn7nhdo4q.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336466/aneu/l5ms6h6arnnr6ahmgpki.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-bottom-bubble-gum",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'new-bottoms'],
            title: "BALI TOP (BUBBLE GUM)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/nkq4ennfvhofn0jp9hhw.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/azjxkboqqcb5xkump1dp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/iktwmi1nhvhx0ltleate.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/dkkzkgt5box5axgxcnnl.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/jmvwdfo9xmq0fktal0cy.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-top-arizona-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-news'],
            title: "BALI TOP (ARIZONA FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/nkq4ennfvhofn0jp9hhw.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/azjxkboqqcb5xkump1dp.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/iktwmi1nhvhx0ltleate.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/dkkzkgt5box5axgxcnnl.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667336928/aneu/jmvwdfo9xmq0fktal0cy.webp'
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-bottom-arizona-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'new-bottoms'],
            title: "BALI BOTTOM (ARIZONA FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/oq2dabaybidxznzfrigo.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/upianlzxnifmxo1xgrxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337112/aneu/npt5x0hficmhex0hq8py.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/fqvotxlzn8bqge2ukkrf.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-bottom-outline-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'new-bottoms'],
            title: "BALI BOTTOM (OUTLINE FLORAL)",
            gender: 'best_sellers'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/oq2dabaybidxznzfrigo.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/upianlzxnifmxo1xgrxh.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337112/aneu/npt5x0hficmhex0hq8py.webp',
                'https://res.cloudinary.com/alexispavon010/image/upload/v1667337111/aneu/fqvotxlzn8bqge2ukkrf.webp',
            ],
            colors: [0],
            inStock: 10,
            price: 30,
            sizes: ['S', 'M', 'L', 'XL'],
            slug: "bali-top-outline-floral",
            type: 'hoodies',
            tags: ['hoodie', 'best-sellers', 'new', 'tops-new'],
            title: "BALI TOP (OUTLINE FLORAL)",
            gender: 'best_sellers'
        },
    ]
}