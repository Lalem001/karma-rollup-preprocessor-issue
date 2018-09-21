import main from './main';

describe('karma-rollup-preprocessor mapping error', () => {
	it('should map error to correct line', () => {
		expect(main.name).toBe('main');
		// Failure should be mapped to the following line (7)
		expect(true).toBe(false); // obviously not true
		// Check logged output
	})
});
