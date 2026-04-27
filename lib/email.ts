type WelcomeEmailInput = {
  email: string;
  name: string;
};

export async function sendWelcomeEmail({ email, name }: WelcomeEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    console.warn("Welcome email skipped because RESEND_API_KEY or EMAIL_FROM is missing.");
    return { sent: false, reason: "missing-config" as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Cadastro confirmado na CognAi",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h1 style="color: #111827;">Bem-vindo(a) à CognAi, ${name}.</h1>
          <p>Seu cadastro foi realizado com sucesso.</p>
          <p>Agora você já pode entrar na plataforma, montar seu plano de estudo e acompanhar sua evolução.</p>
          <p>Time CognAi</p>
        </div>
      `
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send welcome email: ${errorText}`);
  }

  return { sent: true as const };
}

