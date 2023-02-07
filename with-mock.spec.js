import { expect, it, vi } from 'vitest';

vi.mock('vue');

it('updates the snapshot', () => {
    expect('a').toMatchInlineSnapshot('"b"');
});