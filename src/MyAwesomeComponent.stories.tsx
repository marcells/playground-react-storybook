import * as React from 'react';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { storiesOf } from '@storybook/react';
import * as addonKnobs from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MyAwesomeComponent } from "./MyAwesomeComponent";
// import docs from './docs.md';

const mock = new MockAdapter(axios);

mock
    .onGet('http://dummy.restapiexample.com/api/v1/employees')
    .reply(200, [{ employee_name: "Awesome employee 1" }, { employee_name: "More awesome employee 2" }]);

storiesOf("Area 1 | Part 1 > Sub Part 1 > My awesome component", module)
    .addDecorator(addonKnobs.withKnobs)
    .add("with text (full styles)", () => (
        <div className="App">
            <header className="App-header">
                <MyAwesomeComponent onClick={action('Clicked')} title={addonKnobs.text('title', 'Some text')} />
            </header>
        </div>
    ), { 
        notes: { markdown: `# Header
## Subheader` }
    })
    .add("with some other text", () => (
        <MyAwesomeComponent onClick={action('Clicked')} title="Some other text" />
    ), {
        notes: 'Kurze Beschreibung der Komponente'
    });