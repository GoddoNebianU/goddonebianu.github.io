#!/bin/sh

if [ $# -ne 2 ]; then
    echo "参数数量错误"
    exit 1
fi

target_dir=$(dirname $(realpath $0))/../posts/$1

if [ ! -d $target_dir ]; then
    mkdir -p $target_dir;
fi

now_date=$(date "+%Y.%m.%d %H:%M")

if [ "$1" ==  "Super" ]; then
cat > $target_dir/$2.md << EOF
---
title:
description:
draft: true
---
EOF
else
cat > $target_dir/$2.md << EOF
---
title:
description:
date_created: $now_date
date_modified: $now_date
draft: true
---
EOF
fi
