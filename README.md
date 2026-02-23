# @marcuth/promise

A simple, lightweight utility to handle Promises in TypeScript without repetitive `try/catch` blocks. Inspired by Go's error handling pattern.

## 🚀 Motivation

Working with Promises in JavaScript/TypeScript usually involves using `try/catch`, which can make code nested and harder to read when multiple asynchronous operations are involved.

```typescript
// Without @marcuth/promise
try {
  const user = await getUser(id);
  try {
    const posts = await getPosts(user.id);
  } catch (err) {
    // handle posts error
  }
} catch (err) {
  // handle user error
}
```

With `@marcuth/promise`, you can handle errors in a linear and clean way:

```typescript
import promise from '@marcuth/promise';

const [user, userErr] = await promise(getUser(id));
if (userErr) return handleError(userErr);

const [posts, postsErr] = await promise(getPosts(user.id));
if (postsErr) return handleError(postsErr);
```

## 📦 Installation

```bash
npm install @marcuth/promise
# or
yarn add @marcuth/promise
# or
pnpm add @marcuth/promise
```

## 🛠️ Usage

```typescript
import promise from '@marcuth/promise';

async function fetchData() {
  const [data, error] = await promise(axios.get('https://api.example.com/data'));

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Received data:', data);
}
```

## 📖 API

### `promise<T>(p: Promise<T>): Promise<[T, null] | [null, any]>`

The function takes a Promise and returns a tuple (two-element array):

1.  **Success**: `[Awaited<T>, null]` - Where the first element is the result of the resolved Promise.
2.  **Error**: `[null, any]` - Where the second element is the error caught in the `catch` block.

## 🧪 Development

If you want to contribute or test locally:

### Install dependencies:
```bash
npm install
```

### Run tests:
```bash
npm test
```

### Build:
```bash
npm run build
```

## 📄 License
[MIT](LICENSE)