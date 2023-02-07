import { expect, it, vi } from 'vitest';

it('updates the snapshot', () => {
    expect('a').toMatchInlineSnapshot('"b"');
});