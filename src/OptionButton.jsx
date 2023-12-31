
'use client';

import { Button, Tooltip } from 'flowbite-react';

export default function OptionButton() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
}
