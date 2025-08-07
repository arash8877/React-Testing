// import { it, expect, describe } from 'vitest';

// describe('group', () => {
//     it('should', async() => {
//        const response = await fetch('/categories');
//        const data = await response.json();
//        console.log(data);
//         expect(data).toHaveLength(3);
//     })
// })

import { db } from "./mocks/db";

describe("group", () => {
  it("should", () => {
    const product = db.product.create();

    console.log(product);
  });
});
