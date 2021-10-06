import Image from 'next/image';

export default function Logo({ width = 230, height = 153 }) {
  return (
    <a href='https://xrpapes.club/'>
      <Image src='/img/logo.png' width={width} height={height} layout='fixed' alt='logo' />
    </a>
  );
}
