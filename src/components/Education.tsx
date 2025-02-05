import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
  return (
    <div className="space-y-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center space-x-2">
          <Book className="w-6 h-6 text-primary-500" />
          <CardTitle className="text-2xl text-primary-500">
            Protocolo de Modulação Intestinal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="fase1" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fase1">Fase 1</TabsTrigger>
              <TabsTrigger value="fase2">Fase 2</TabsTrigger>
              <TabsTrigger value="fase3">Fase 3</TabsTrigger>
            </TabsList>
            {phases.map((phase, phaseIndex) => (
              <TabsContent key={phaseIndex} value={`fase${phaseIndex + 1}`}>
                <div className="space-y-6">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary-600 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>

                  <div className="grid gap-6">
                    {phase.dailyRoutine.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        <div className="bg-primary-100 px-4 py-2">
                          <h4 className="font-medium text-primary-700">
                            Dia {dayIndex + 1}
                          </h4>
                        </div>
                        <div className="p-4 space-y-4">
                          {Object.entries(day.meals).map(([time, meal]) => (
                            <div key={time} className="space-y-2">
                              <h5 className="font-medium text-gray-700">{time}</h5>
                              <div className="pl-4 text-gray-600">
                                {meal.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center space-x-2 py-1"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-primary-300" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <h5 className="font-medium text-gray-700 mb-2">
                              Suplementos do dia
                            </h5>
                            <div className="pl-4 space-y-2">
                              {day.supplements.map((supplement, i) => (
                                <div
                                  key={i}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-2 h-2 rounded-full bg-secondary-400" />
                                  <span className="text-gray-600">{supplement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const phases = [
  {
    title: "Fase 1: Remoção e Desintoxicação",
    description: "7 dias focados na redução da inflamação e eliminação de toxinas",
    dailyRoutine: [
      {
        meals: {
          "Café da manhã (7:00)": [
            "2 ovos mexidos",
            "1/2 abacate",
            "Chá de gengibre",
          ],
          "Lanche (10:00)": [
            "Suco verde (pepino, gengibre, limão)",
            "1 punhado de castanhas",
          ],
          "Almoço (13:00)": [
            "Frango grelhado",
            "Mix de legumes cozidos",
            "1 colher de azeite extra virgem",
          ],
          "Lanche (16:00)": ["Chá de camomila", "1 maçã assada com canela"],
          "Jantar (19:00)": ["Sopa de legumes", "Caldo de ossos"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de frutas vermelhas",
            "Proteína vegetal",
          ],
          "Lanche (10:00)": [
            "1/2 abacate",
            "5 castanhas do pará",
          ],
          "Almoço (13:00)": [
            "Salmão assado",
            "Brócolis cozido no vapor",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de ervas", "1 pera"],
          "Jantar (19:00)": ["Sopa de abóbora", "Frango desfiado"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Omelete com espinafre",
            "Chá de limão",
          ],
          "Lanche (10:00)": [
            "Suco de couve",
            "3 nozes",
          ],
          "Almoço (13:00)": [
            "Carne magra grelhada",
            "Couve-flor cozida",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de hibisco", "1 laranja"],
          "Jantar (19:00)": ["Sopa de lentilha", "Ovos cozidos"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Panqueca de banana",
            "Chá de erva doce",
          ],
          "Lanche (10:00)": [
            "Suco de melão",
            "4 amêndoas",
          ],
          "Almoço (13:00)": [
            "Peixe cozido",
            "Abobrinha refogada",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de alecrim", "1 pêssego"],
          "Jantar (19:00)": ["Sopa de quinoa", "Frango cozido"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Vitamina de abacate",
            "Chá de boldo",
          ],
          "Lanche (10:00)": [
            "Suco de abacaxi",
            "2 castanhas",
          ],
          "Almoço (13:00)": [
            "Frango assado",
            "Repolho refogado",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de hortelã", "1 ameixa"],
          "Jantar (19:00)": ["Sopa de grão de bico", "Ovos mexidos"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de chia",
            "Chá de camomila",
          ],
          "Lanche (10:00)": [
            "Suco de maracujá",
            "3 avelãs",
          ],
          "Almoço (13:00)": [
            "Carne magra cozida",
            "Cenoura refogada",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de erva cidreira", "1 banana"],
          "Jantar (19:00)": ["Sopa de ervilha", "Frango desfiado"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de manga",
            "Chá de gengibre",
          ],
          "Lanche (10:00)": [
            "Suco de limão",
            "4 nozes",
          ],
          "Almoço (13:00)": [
            "Peixe grelhado",
            "Beterraba cozida",
            "Azeite de oliva",
          ],
          "Lanche (16:00)": ["Chá de funcho", "1 kiwi"],
          "Jantar (19:00)": ["Sopa de abóbora", "Ovos cozidos"],
        },
        supplements: [
          "Glutamina (5g) - Em jejum",
          "Probiótico específico - Antes do almoço",
          "Enzimas digestivas - Antes das refeições principais",
        ],
      },
    ],
  },
  {
    title: "Fase 2: Reequilíbrio da Microbiota",
    description: "7 dias para reintroduzir boas bactérias e fortalecer a digestão",
    dailyRoutine: [
      {
        meals: {
          "Café da manhã (7:00)": [
            "Iogurte de coco com biomassa",
            "Granola sem glúten",
            "Chá de hortelã",
          ],
          "Lanche (10:00)": ["Kefir", "Mix de frutas vermelhas"],
          "Almoço (13:00)": [
            "Salmão grelhado",
            "Quinoa",
            "Legumes fermentados",
          ],
          "Lanche (16:00)": ["Kombucha", "Chips de banana verde"],
          "Jantar (19:00)": [
            "Canja de galinha",
            "Vegetais assados",
          ],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de kefir",
            "Sementes de chia",
          ],
          "Lanche (10:00)": [
            "Iogurte natural",
            "Amoras",
          ],
          "Almoço (13:00)": [
            "Frango cozido",
            "Arroz integral",
            "Kimchi",
          ],
          "Lanche (16:00)": ["Chá de gengibre", "Chips de batata doce"],
          "Jantar (19:00)": ["Sopa de missô", "Ovos mexidos"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de quinoa",
            "Frutas picadas",
          ],
          "Lanche (10:00)": [
            "Kefir de água",
            "Framboesas",
          ],
          "Almoço (13:00)": [
            "Carne magra assada",
            "Cuscuz de couve-flor",
            "Chucrute",
          ],
          "Lanche (16:00)": ["Chá de camomila", "Chips de coco"],
          "Jantar (19:00)": ["Sopa de abóbora", "Frango desfiado"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Iogurte de amêndoas",
            "Granola caseira",
          ],
          "Lanche (10:00)": [
            "Kefir de leite",
            "Mirtilos",
          ],
          "Almoço (13:00)": [
            "Peixe assado",
            "Purê de batata doce",
            "Picles",
          ],
          "Lanche (16:00)": ["Chá de hibisco", "Chips de jaca"],
          "Jantar (19:00)": ["Sopa de lentilha", "Ovos cozidos"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de iogurte",
            "Sementes de linhaça",
          ],
          "Lanche (10:00)": [
            "Iogurte de ovelha",
            "Groselhas",
          ],
          "Almoço (13:00)": [
            "Frango grelhado",
            "Arroz de couve-flor",
            "Azeitonas",
          ],
          "Lanche (16:00)": ["Chá de erva doce", "Chips de inhame"],
          "Jantar (19:00)": ["Sopa de grão de bico", "Frango cozido"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de painço",
            "Frutas vermelhas",
          ],
          "Lanche (10:00)": [
            "Kefir de coco",
            "Cerejas",
          ],
          "Almoço (13:00)": [
            "Carne magra cozida",
            "Cenoura fermentada",
            "Alcaparras",
          ],
          "Lanche (16:00)": ["Chá de alecrim", "Chips de beterraba"],
          "Jantar (19:00)": ["Sopa de ervilha", "Ovos mexidos"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de frutas",
            "Sementes de abóbora",
          ],
          "Lanche (10:00)": [
            "Iogurte de búfala",
            "Morangos",
          ],
          "Almoço (13:00)": [
            "Peixe cozido",
            "Pepino fermentado",
            "Mostarda",
          ],
          "Lanche (16:00)": ["Chá de funcho", "Chips de mandioquinha"],
          "Jantar (19:00)": ["Sopa de abóbora", "Frango desfiado"],
        },
        supplements: [
          "Probiótico específico - Em jejum",
          "Ômega 3 - Com o almoço",
          "Vitamina D - Com o almoço",
        ],
      },
    ],
  },
  {
    title: "Fase 3: Reparo e Manutenção",
    description: "7 dias para fortalecer a barreira intestinal e manter o equilíbrio",
    dailyRoutine: [
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de aveia sem glúten",
            "Banana madura",
            "Chá verde",
          ],
          "Lanche (10:00)": [
            "Iogurte natural com mel",
            "Granola caseira",
          ],
          "Almoço (13:00)": [
            "Peixe assado",
            "Arroz integral",
            "Feijão bem cozido",
            "Salada crua",
          ],
          "Lanche (16:00)": ["Vitamina de frutas", "Torrada de pão sem glúten"],
          "Jantar (19:00)": [
            "Omelete com legumes",
            "Purê de batata doce",
          ],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de frutas",
            "Sementes de chia",
          ],
          "Lanche (10:00)": [
            "Iogurte de coco",
            "Frutas vermelhas",
          ],
          "Almoço (13:00)": [
            "Frango cozido",
            "Quinoa",
            "Legumes cozidos",
          ],
          "Lanche (16:00)": ["Chá de ervas", "Biscoitos de arroz"],
          "Jantar (19:00)": ["Sopa de legumes", "Ovos mexidos"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de arroz",
            "Frutas secas",
          ],
          "Lanche (10:00)": [
            "Iogurte de amêndoas",
            "Nozes",
          ],
          "Almoço (13:00)": [
            "Carne magra assada",
            "Batata doce",
            "Salada verde",
          ],
          "Lanche (16:00)": ["Chá de camomila", "Pão de batata doce"],
          "Jantar (19:00)": ["Sopa de abóbora", "Frango desfiado"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de abacate",
            "Sementes de linhaça",
          ],
          "Lanche (10:00)": [
            "Iogurte de castanha",
            "Amêndoas",
          ],
          "Almoço (13:00)": [
            "Peixe assado",
            "Purê de abóbora",
            "Legumes cozidos",
          ],
          "Lanche (16:00)": ["Chá de hibisco", "Biscoitos de polvilho"],
          "Jantar (19:00)": ["Sopa de lentilha", "Ovos cozidos"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de milho",
            "Frutas vermelhas",
          ],
          "Lanche (10:00)": [
            "Iogurte de ovelha",
            "Castanhas",
          ],
          "Almoço (13:00)": [
            "Frango grelhado",
            "Arroz integral",
            "Salada de folhas",
          ],
          "Lanche (16:00)": ["Chá de erva doce", "Pão de queijo sem lactose"],
          "Jantar (19:00)": ["Sopa de grão de bico", "Frango cozido"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Smoothie de manga",
            "Sementes de girassol",
          ],
          "Lanche (10:00)": [
            "Iogurte de búfala",
            "Nozes",
          ],
          "Almoço (13:00)": [
            "Carne magra cozida",
            "Cenoura cozida",
            "Salada de tomate",
          ],
          "Lanche (16:00)": ["Chá de alecrim", "Bolo de fubá sem glúten"],
          "Jantar (19:00)": ["Sopa de ervilha", "Ovos mexidos"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
      {
        meals: {
          "Café da manhã (7:00)": [
            "Mingau de amaranto",
            "Frutas amarelas",
          ],
          "Lanche (10:00)": [
            "Iogurte de kefir",
            "Amoras",
          ],
          "Almoço (13:00)": [
            "Peixe cozido",
            "Beterraba cozida",
            "Salada de pepino",
          ],
          "Lanche (16:00)": ["Chá de funcho", "Cookies de amêndoas"],
          "Jantar (19:00)": ["Sopa de abóbora", "Frango desfiado"],
        },
        supplements: [
          "Probiótico de manutenção - Em jejum",
          "Colágeno - Com o café da manhã",
          "Magnésio - Após o jantar",
        ],
      },
    ],
  },
];

export default Education;
