import { render, screen } from "@testing-library/react";
import TagList from "../../src/components/TagList";


// this test, testing an async component that fetches data
// TagList component includes an async function 

describe('TagList', () => {
    it('should render tags', () => {
        render (<TagList />);
        
    })
})