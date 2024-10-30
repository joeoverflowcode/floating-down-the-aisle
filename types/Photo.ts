import { PortableTextBlock } from "sanity";

export type Photo = {
    _key: string,
    image: {
        asset: {
            _ref: string,
            _type: "reference"
        }
    }
    caption: string
}
