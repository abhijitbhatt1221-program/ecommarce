import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const products = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality noise-canceling wireless headphones.',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    },
    {
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with tactile switches.',
      price: 129.50,
      imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
    },
    {
      name: 'Gaming Mouse',
      description: 'Ergonomic gaming mouse with programmable buttons.',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1527814050087-37938154796c?w=500&q=80',
    },
    {
      name: '4K Monitor',
      description: '27-inch 4K UHD monitor for stunning visuals.',
      price: 349.00,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    },
    {
      name: 'Laptop Stand',
      description: 'Adjustable aluminum laptop stand.',
      price: 35.00,
      imageUrl: 'https://images.unsplash.com/photo-1526657782461-9fe13401a67c?w=500&q=80',
    },
    {
      name: 'Webcam 1080p',
      description: 'HD webcam with built-in microphone for streaming.',
      price: 45.00,
      imageUrl: 'https://images.unsplash.com/photo-1599580665975-d28c77ec23f5?w=500&q=80',
    }
  ]

  console.log('Start seeding...')

  for (const p of products) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created product with id: ${product.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
