
# Run below 2  Command
# chmod +x create-page.sh
# ./create-page.sh app/KCE Contact About Gallery




#!/bin/bash

BASE_PATH=$1
shift   # remove first argument, remaining are folder names

if [ -z "$BASE_PATH" ] || [ "$#" -eq 0 ]; then
  echo "❌ Usage: ./create-page.sh <base-path> <Folder1> <Folder2> ..."
  exit 1
fi

for FOLDER_NAME in "$@"
do
  TARGET_PATH="$BASE_PATH/$FOLDER_NAME"
  mkdir -p "$TARGET_PATH"

  cat <<EOF > "$TARGET_PATH/page.js"
import React from 'react'

export default function Page() {
  return (
    <div>$FOLDER_NAME</div>
  )
}
EOF

  echo "✅ Created $TARGET_PATH/page.js"
done



