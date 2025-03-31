// app/page.tsx (or any server component)

// Extend the global type to include leakyArray
declare global {
  var leakyArray: any[];
}

export default function Page() {
  // 메모리 누수를 유발할 수 있는 전역 배열
  globalThis.leakyArray = globalThis.leakyArray || [];

  // 요청이 들어올 때마다 계속 배열에 쌓임
  const largeData = new Array(1e6).fill("💥");
  globalThis.leakyArray.push(largeData);

  return (
    <div>
      <h1>Memory Leak Example</h1>
      <p>Request handled. Array length: {globalThis.leakyArray.length}</p>
    </div>
  );
}
