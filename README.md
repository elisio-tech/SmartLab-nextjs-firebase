🔥 PASSO 1 — Firebase

✔ Criar projeto no Firebase
✔ Ativar:

Authentication (email/password)
Firestore

✔ Criar .env.local
✔ Criar lib/firebase.ts

🔐 PASSO 2 — Auth

✔ Criar:

/login
auth-service.ts
await signInWithEmailAndPassword(auth, email, password);
🧠 PASSO 3 — useAuth (estado do usuário)

👉 ESSENCIAL

onAuthStateChanged(auth, (user) => {
  setUser(user);
});
🔒 PASSO 4 — Proteger / (dashboard)

👉 / agora é o dashboard

if (!user) router.push("/login");

🔄 PASSO 5 — Firestore (pacientes)

✔ Criar coleção:

patients/

✔ Criar service:

addDoc(collection(db, "patients"), data);
🧾 PASSO 6 — Funcionalidade mínima

👉 Dashboard deve ter:

botão “Criar paciente”
lista de pacientes
🧠 PASSO 7 — Estrutura de dados
patients/
  id/
    name
    age
    createdAt
⚡ RESULTADO FINAL

👉 Tu consegues:

✔ login
✔ entrar no dashboard (/)
✔ criar paciente
✔ listar pacientes

🧠 FLUXO FINAL
/login → login → /
/ → protegido → dashboard
/dashboard → criar + listar pacientes
❌ NÃO FAZER AGORA

❌ roles (admin, doutor, etc)
❌ design complexo
❌ middleware avançado
❌ backend próprio

🚀 DEPOIS DO MVP

👉 Só depois adiciona:

roles
stock
métricas
layout bonito
💡 Dica mais importante

👉 Termina isso primeiro
👉 Mesmo simples
👉 Mesmo feio

👉 funcionando > perfeito