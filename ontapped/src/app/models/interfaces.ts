export interface Card {
    name: string;
    set_Short: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    rarity: string;
    power: string;
    toughness: string;
    mana_Cost: string;
    loyalty: string;
    cmc: string;
    image_Small: string;
    image_Normal: string;
    image_Large: string;
    card_Text: string;
    flavor_Text: string;
    type_Line: string;
    set_Name: string;
    full_Cost: string[];
    numberInCollection: number;
    price: string;
}

export interface ScryfallCard {
    name: string;
    set: string;
    colors: string[];
    rarity: string;
    mana_cost: string;
    added: boolean;
    power: string;
    type_line: string;
    color_identity: string;
    toughness: string;
    loyalty: string;
    image_small: string;
    card_text: string;
    flavor_text: string;
    numberInCollection: number;
    cmc: string;
    image_uris: any;
    set_name: string;
    oracle_text: string;
    card_faces: CardFace[];
    prices: Price[];
}


interface CardFace {
    oracle_text: string;
}

interface Price {
    usd: string;
}
