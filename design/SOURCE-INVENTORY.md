# Inventário verificável do export original

Fonte: `boracampo-design(1).zip`, entregue na conversa. O ZIP foi inspecionado e os SHA-256 calculados sobre os bytes originais. Este inventário não é o conteúdo dos HTML; eles permanecem no anexo até que haja transferência de arquivos entre os ambientes.

| Arquivo | Bytes | SHA-256 |
|---|---:|---|
| README.md | 3646 | 487b789a46db638a28bd5be9fde32267fa809690474e5567e1fe01896a211cee |
| project/compat.json | 1228 | dff90ad5cf17b679120a5c4ffee4567e372931dff006bde211d2303088b17b4a |
| project/BoraCampo - Pagina da Arena.dc.html | 76883 | e8e224e2d57a72197f2687103fe820ff35afc2138aa3780e7de1850e89c5e626 |
| project/BoraCampo - Landing Page.dc.html | 101989 | 82adcb306817125c632f190263b035e694fd019fcac1a06b0563c2edb6c22be1 |
| project/BoraCampo - Painel da Arena.dc.html | 129233 | a8e887589d5108b46e23301e7527b246ab503bb734e786dfd8ecdab0d0619ba5 |
| project/BoraCampo - Marketplace.dc.html | 64865 | 1943e0f34e0fedc4feb0b3be24c94260f25dc9d42a05ee1a77ae91900ca853ae |
| project/support.js | 69150 | 8fe7df74405f3c55f49b7249c74ea1397e65d07dea2b1bd3b4a489bec2e28cbe |

O runtime do Claude Design não deve ser publicado como código de produção. Use os protótipos como referência visual e comportamental; reimplemente em Next.js. As páginas originais dependem de support.js e precisam manter os nomes originais.

## Fluxo de trabalho

GitHub é a fonte de verdade do código. Os deploys são efetuados na Vercel, e as migrations no projeto Supabase do BoraCampo. Não depende de clone no computador do proprietário. Não inclua credenciais em commits.