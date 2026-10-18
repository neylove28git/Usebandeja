export type Platform = 'Bandeja' | 'iFood' | '99Food' | 'Rappi' | 'ASaaS'
export type Status = 'Em andamento' | 'Concluído' | 'Cancelado'

export type Product = { id: string; name: string; description: string; price: number; image?: string }
export type Sale = { id: string; product: string; platform: Platform; customer: string; value: number; date: string; time: string; status: Status }
export type Order = { id: number; platform: Platform; status: Status; time: string; customer: string; phone: string; items: string[]; total: number }
export type Profile = { name: string; username: string; email: string; phone: string; avatar?: string; cover?: string; business: string; category: string; location: string; bio: string }

export const asset = (name: string) => `/assets/${name}`

export const platformAssets: Record<Platform, string> = {
  Bandeja: asset('logo-simplificada.jpg'),
  iFood: asset('icone-ifood.jpg'),
  '99Food': asset('icone-99food.jpg'),
  Rappi: asset('icone-rappi.jpg'),
  ASaaS: asset('icone-asaas.jpg'),
}

export const initialProfile: Profile = {
  name: 'Usuario01', username: 'usuario01', email: 'usuario01@email.com', phone: '',
  avatar: asset('avatar-padrao.jpg'), business: 'Sabor da Rua', category: 'Restaurante',
  location: 'São José do Rio Preto - SP', bio: 'Comida de qualidade, preparada com ingredientes frescos e muito sabor.',
}

export const menuProducts: Product[] = [
  { id: 'm1', name: 'Executivo de Alcatra', description: 'Alcatra grelhada, arroz, feijão, fritas e salada.', price: 24.9 },
  { id: 'm2', name: 'Executivo de Frango', description: 'Filé de frango grelhado, arroz, feijão, fritas e salada.', price: 22.9 },
  { id: 'm3', name: 'Executivo de Porco', description: 'Bisteca suína, arroz, feijão, fritas e salada.', price: 23.9 },
  { id: 'm4', name: 'Executivo Acebolado', description: 'Carne acebolada, arroz, feijão, fritas e salada.', price: 24.9 },
  { id: 'm5', name: 'Executivo à Milanesa', description: 'Carne à milanesa, arroz, feijão, fritas e salada.', price: 23.9 },
  { id: 'm6', name: 'Executivo de Calabresa', description: 'Linguiça calabresa, arroz, feijão, fritas e salada.', price: 21.9 },
]

export const saleCatalog = [
  { name: 'Pastel de queijo', price: 12.9 }, { name: 'Pastel de carne', price: 13.5 },
  { name: 'Pastel de pizza', price: 13.9 }, { name: 'Pastel de frango', price: 13.5 },
  { name: 'Caldo de cana', price: 8 }, { name: 'Coxinha', price: 9.9 },
  { name: 'Refrigerante', price: 6 }, { name: 'Suco natural', price: 7 },
]

const saleRows: Array<[string, Platform, string, number, string]> = [
  ['Pastel de queijo', 'iFood', 'Ana Silva', 12.9, '14:32'],
  ['Pastel de carne', '99Food', 'Carlos Oliveira', 13.5, '14:21'],
  ['Caldo de cana', 'Bandeja', 'Mariana Costa', 8, '13:58'],
  ['Pastel de pizza', 'iFood', 'João Pedro', 13.9, '13:47'],
  ['Refrigerante', 'Bandeja', 'Beatriz Lima', 6, '13:12'],
  ['Pastel de carne', '99Food', 'Lucas Mendes', 13.5, '12:46'],
  ['Pastel de queijo', 'iFood', 'Fernanda Alves', 12.9, '12:20'],
  ['Caldo de cana', 'Bandeja', 'Rafael Souza', 8, '11:58'],
  ['Pastel de frango', '99Food', 'Camila Santos', 13.5, '11:34'],
  ['Coxinha', 'iFood', 'Gabriel Rocha', 9.9, '10:15'],
  ['Pastel de queijo', 'Bandeja', 'Juliana Pereira', 12.9, '09:42'],
  ['Pastel de carne', '99Food', 'Matheus Lima', 13.5, '09:18'],
  ['Refrigerante', '99Food', 'Aline Castro', 6, '08:53'],
  ['Caldo de cana', 'Bandeja', 'Tiago Nunes', 8, '08:21'],
  ['Pastel de pizza', 'iFood', 'Larissa Mendes', 13.9, '07:46'],
]

export const baseSales: Sale[] = saleRows.map(([product, platform, customer, value, time], i) => ({
  id: `V-${1024 - i}`, product, platform, customer, value, time, date: '14/10/2026', status: 'Concluído',
}))

export const baseOrders: Order[] = [
  { id: 1024, platform: 'Bandeja', status: 'Em andamento', time: '14:32', customer: 'Maria Silva', phone: '(17) 98123-4567', items: ['2× Pastel de queijo', '1× Refrigerante'], total: 24.9 },
  { id: 1023, platform: 'iFood', status: 'Em andamento', time: '13:11', customer: 'Carlos Oliveira', phone: '(17) 99654-3210', items: ['2× Pastel de carne', '1× Suco natural'], total: 18 },
  { id: 1022, platform: '99Food', status: 'Concluído', time: '12:46', customer: 'Ana Costa', phone: '(17) 98876-5432', items: ['1× Pastel de pizza', '1× Caldo de cana'], total: 22.5 },
  { id: 1021, platform: 'iFood', status: 'Em andamento', time: '11:28', customer: 'João Pereira', phone: '(17) 98234-7890', items: ['3× Pastel de carne', '1× Refrigerante'], total: 27 },
  { id: 1020, platform: 'Bandeja', status: 'Concluído', time: '10:15', customer: 'Fernanda Lima', phone: '(17) 99111-2233', items: ['1× Pastel de queijo', '1× Suco natural'], total: 12 },
  { id: 1019, platform: '99Food', status: 'Cancelado', time: '09:48', customer: 'Lucas Martins', phone: '(17) 98765-4321', items: ['2× Pastel de frango', '1× Refrigerante'], total: 25 },
  { id: 1018, platform: 'iFood', status: 'Em andamento', time: '09:12', customer: 'Juliana Santos', phone: '(17) 99887-6655', items: ['1× Caldo de cana', '1× Pastel de carne'], total: 8.5 },
  { id: 1017, platform: 'Bandeja', status: 'Em andamento', time: '08:35', customer: 'Pedro Almeida', phone: '(17) 99776-5544', items: ['1× Pastel de pizza', '1× Refrigerante'], total: 21.9 },
  { id: 1016, platform: '99Food', status: 'Concluído', time: '08:02', customer: 'Beatriz Souza', phone: '(17) 99333-2211', items: ['1× Pastel de carne', '1× Suco natural'], total: 14 },
]

export const productBreakdown = [
  { name: 'Pastel de queijo', amount: '158 vendas', pct: '42,3%', color: '#16a05a' },
  { name: 'Pastel de carne', amount: '90 vendas', pct: '24,1%', color: '#fcc419' },
  { name: 'Caldo de cana', amount: '47 vendas', pct: '12,6%', color: '#ff8a1f' },
  { name: 'Produtos menos vendidos', amount: '78 vendas', pct: '20,9%', color: '#f02d2d' },
]

export const planData = [
  { name: 'Essencial', price: 'R$ 0,00', description: 'Ideal para começar a vender online.', cta: 'Começar agora', benefits: ['Cardápio digital com link e QR code para compartilhar', 'Recebimento de pedidos pelo link', 'Painel de pedidos com status (em andamento, concluído, cancelado)', 'Histórico de vendas básico', 'Botão de WhatsApp no cardápio', 'Limite de produtos e pedidos por mês'] },
  { name: 'Avançado', price: 'R$ 49,90', description: 'Mais controle e integração para o seu negócio.', cta: 'Assinar Avançado', popular: true, benefits: ['Tudo do Essencial', 'Produtos e pedidos ilimitados', 'Integração com 1 plataforma (iFood, 99Food ou Rappi), com os pedidos centralizados em um só lugar', 'Análise de vendas: produtos mais vendidos e menos vendidos', 'Análise do cardápio: visualizações dos últimos 30 dias', 'Histórico de vendas completo, com filtros por plataforma, produto e status', 'Personalização do cardápio com logo e capa'] },
  { name: 'Plus', price: 'R$ 79,90', description: 'Solução completa para escalar suas vendas.', cta: 'Assinar Plus', dark: true, benefits: ['Tudo do Avançado', 'Todas as integrações: iFood, 99Food, Rappi e ASaaS', 'Recebimento automático de pagamentos via ASaaS', 'Vendas por plataforma, comparando o desempenho de cada canal', 'Variação de faturamento e ticket médio', 'Suporte prioritário'] },
]
