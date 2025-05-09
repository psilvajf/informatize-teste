import Link from "next/link";
import Image from "next/image";

import WorkflowImage01 from "@/public/images/workflow-01.png";
import WorkflowImage02 from "@/public/images/workflow-02.png";
import WorkflowImage03 from "@/public/images/workflow-03.png";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-20 text-center">
            <div className="bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-200 pb-3 text-transparent">
              <span style={{ letterSpacing: "-0.1875px" }}>
                Fluxos de trabalho personalizados
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Simplifique sua infraestrutura digital
            </h2>
            <p className="text-lg text-indigo-200/65">
              <strong>
                Soluções completas e eficientes para sua presença online, rede e
                equipamentos.
              </strong>
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-6 md:max-w-none md:grid-cols-3">
            {/* 1st item */}
            <Link
              href="#0"
              className="group relative flex h-full flex-col items-center rounded-lg bg-gray-800 p-0.5 transition duration-700 hover:z-[2]"
            >
              <div className="flex h-full w-full flex-col items-center rounded-[inherit] bg-gray-950 p-0 transition duration-500">
                <Image
                  src={WorkflowImage01}
                  width={350}
                  height={288}
                  alt="Workflow 01"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="rounded-full bg-gray-800/40 bg-gradient-to-r from-indigo-500 to-purple-200 bg-clip-text px-2.5 py-0.5 text-sm font-medium text-transparent">
                      Sua Presença Online Simplificada
                    </span>
                  </div>
                  <p className="text-gray-400 -ml-1">
                    <div>
                      Crie um site profissional e atraente sem complicações.
                    </div>
                    <div>
                      Design personalizado que reflete a sua marca. Soluções
                      completas, desde a concepção até a publicação.
                    </div>
                    <div></div>
                    <div>
                      Foque no seu negócio, deixe a sua presença online conosco.
                    </div>
                  </p>
                </div>
              </div>
            </Link>

            {/* 2nd item */}
            <Link
              href="#0"
              className="group relative flex h-full flex-col items-center rounded-lg bg-gray-800 p-0.5 transition duration-700 hover:z-[2]"
            >
              <div className="flex h-full w-full flex-col items-center rounded-[inherit] bg-gray-950 p-0 transition duration-500">
                <Image
                  src={WorkflowImage02}
                  width={350}
                  height={288}
                  alt="Workflow 02"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="rounded-full bg-gray-800/40 bg-gradient-to-r from-indigo-500 to-purple-200 bg-clip-text px-2.5 py-0.5 text-sm font-medium text-transparent">
                      Rede Confiável e Organizada
                    </span>
                  </div>
                  <p className="text-gray-400">
                    <div>
                      Cabeamento lógico eficiente para otimizar sua conexão.
                    </div>
                    <div>
                      Organização e identificação para fácil manutenção.
                    </div>
                    <div>
                      Garanta a velocidade e a estabilidade da sua rede.
                    </div>
                  </p>
                </div>
              </div>
            </Link>

            {/* 3rd item */}
            <Link
              href="#0"
              className="group relative flex h-full flex-col items-center rounded-lg bg-gray-800 p-0.5 transition duration-700 hover:z-[2]"
            >
              <div className="flex h-full w-full flex-col items-center rounded-[inherit] bg-gray-950 p-0 transition duration-500">
                <Image
                  src={WorkflowImage03}
                  width={350}
                  height={288}
                  alt="Workflow 03"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="rounded-full bg-gray-800/40 bg-gradient-to-r from-indigo-500 to-purple-200 bg-clip-text px-2.5 py-0.5 text-sm font-medium text-transparent">
                      Seus Equipamentos Sempre Funcionando
                    </span>
                  </div>
                  <p className="text-gray-400">
                    <div>
                      Manutenção preventiva e corretiva para seus computadores e
                      periféricos.
                    </div>
                    <div>
                      Evite interrupções e maximize a vida útil dos seus
                      equipamentos.
                    </div>
                    <div>
                      Suporte técnico especializado para resolver seus problemas
                      rapidamente.
                    </div>
                    <div>
                      Tranquilidade e produtividade para o seu dia a dia.
                    </div>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
