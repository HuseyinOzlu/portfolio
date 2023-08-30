import  Image  from 'next/image';
import React from 'react'

export default function RoundedImage(
    props: React.ComponentProps<typeof Image>
    ) {
    return <Image className="rounded-lg" {...props} />;
}
