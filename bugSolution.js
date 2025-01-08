```javascript
// pages/index.js
export default function Home() {
  const MyComponent = dynamic(() => import('./my-component'), { ssr: false });
  return (
    <div>
      <h1>Home Page</h1>
      <MyComponent />
    </div>
  );
}

// pages/my-component.js
export default function MyComponent() {
  return <div>Dynamically Imported Component</div>;
}
```