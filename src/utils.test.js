import { TestScheduler } from 'jest';
import {getCapitalized, getIdFromUrl, getAnimatedPokemonImage} from './utils';

describe('getCapitalized', function () {
    test('should capitalize single word', function () {
        let input = "hello";
        let output = getCapitalized(input);
        expect(output).toBe("Hello");
        expect(output).toHaveLength(5);
    }); 
});

describe('getIdFromUrl', function () {
    test('should extract the ID from a URL', function () {
        let input = "https://pokeapi.co/api/v2/pokemon/1"
        let output = getIdFromUrl(input);
        expect(output).toBe("1");
        expect(output.length).toBeGreaterThanOrEqual(1);
    }); 
});

describe('getAnimatedPokemonImage', function () {
    test('should return a link to a image', function () {
        let input = "1";
        let output = getAnimatedPokemonImage(input);
        expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif");
    }); 
});


