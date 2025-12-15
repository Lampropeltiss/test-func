import { healthLevel } from "../game";

test.each([
    [100, 'healthy'],
    [51, 'healthy'],
    [50, 'wounded'],
    [45, 'wounded'],
    [15, 'wounded'],
    [14, 'critical'],
    [10, 'critical'],
])('should determine health level',
    (hp, expected) => {
        const result = healthLevel({ health: hp });
        expect(result).toBe(expected);
    })
