# airdev-canvas GitHub Repository Reading Instructions

## List Branches
```
mcp__github__list_branches
- owner: airdevco
- repo: airdev-canvas
```

## Read Code from Any Branch
```
mcp__github__get_file_contents
- owner: airdevco
- repo: airdev-canvas
- ref: [branch name like main, dev, etc.]
- path: [file path or / for directory listing]
```

### Examples
- List root directory: `path: /`
- Read specific file: `path: src/App.tsx`
- Read from subdirectory: `path: src/components/`
- Read from main branch: `ref: main`
- Read from dev branch: `ref: dev`