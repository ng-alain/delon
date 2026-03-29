#!/bin/bash
# Fix remaining Prettier formatting issues in spec files

# Files with formatting issues
files=(
  "packages/theme/src/services/http/http.spec.ts"
  "packages/util/date-time/picker.spec.ts"
  "packages/util/format/validate.spec.ts"
  "packages/util/math/in-range.spec.ts"
)

# Run prettier on these files
for file in "${files[@]}"; do
  echo "Formatting $file..."
  npx prettier --write "$file"
done

echo "Done!"
