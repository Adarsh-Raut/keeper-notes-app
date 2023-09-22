import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
      {/* <Note /> */}
      <Note title="This is note title" content="This is note content" />
    </div>
  );
}
