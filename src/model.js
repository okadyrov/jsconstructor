import image from './assets/image.png'


export const model = [
    {type: 'title', value: 'Website builder in JavaScript', options: {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }},
    {type: 'image', value: image, options: {
            styles: 'padding: 2rem 0;display: flex;justify-content: center;',
            alt: 'my image',
            imageStyles: 'width: 500px; height: auto;'
    }},

    {type: 'textColumns', value: [
            'Pure JavaScript App without libraries',
            'Learn SOLID and OOP principles work in JavaScript',
            'Learn to develop any UI'
        ], options: {
            styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }},
]