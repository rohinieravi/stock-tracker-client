import React from 'react';
import {shallow} from 'enzyme';
import { MemoryRouter } from 'react-router'
import {App} from './app';

describe('<App />', () => {
	it('Renders without crashing', () => {
		shallow(
			<MemoryRouter>
  				<App/>
			</MemoryRouter>
		);
	});
});