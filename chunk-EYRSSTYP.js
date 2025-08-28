import{a as m}from"./chunk-UIXGCL4W.js";import{w as d}from"./chunk-HOG6MQQB.js";import{Kb as e,Lb as t,Vb as a,ga as l,gc as i,lb as c}from"./chunk-5HUFPCHR.js";var b=(()=>{class r{toastService=l(m);showSuccess(){this.toastService.success("Opera\xE7\xE3o realizada com sucesso!")}showError(){this.toastService.error("Erro ao processar a solicita\xE7\xE3o")}showWarning(){this.toastService.warning("Aten\xE7\xE3o: Verificar dados antes de continuar")}showInfo(){this.toastService.info("Informa\xE7\xE3o importante para o usu\xE1rio")}showPatientAlert(){this.toastService.patientAlert("Paciente Jo\xE3o Silva apresenta sinais de instabilidade",{title:"Protocolo de Emerg\xEAncia - Paciente Jo\xE3o Silva",content:`DADOS DO PACIENTE:
Nome: Jo\xE3o Silva
Idade: 67 anos
Registro: HC-2024-001234
Diagn\xF3stico: Insufici\xEAncia Card\xEDaca Congestiva

SINAIS VITAIS ATUAIS:
- Press\xE3o Arterial: 180/110 mmHg (\u2191 Cr\xEDtica)
- Frequ\xEAncia Card\xEDaca: 110 bpm (\u2191 Taquicardia)
- Satura\xE7\xE3o O2: 88% (\u2193 Hipoxemia)
- Temperatura: 37.8\xB0C (\u2191 Febre)

PROTOCOLO DE A\xC7\xC3O:
1. Administrar O2 suplementar 2-4L/min
2. Verificar sinais vitais a cada 15 minutos
3. Contactar m\xE9dico cardiologista de plant\xE3o
4. Preparar medica\xE7\xE3o de emerg\xEAncia (Furosemida 40mg)
5. Monitorar diurese e balan\xE7o h\xEDdrico

MEDICA\xC7\xD5ES ATUAIS:
- Enalapril 10mg - 2x/dia
- Furosemida 40mg - 1x/dia
- Carvedilol 6,25mg - 2x/dia
- AAS 100mg - 1x/dia

OBSERVA\xC7\xD5ES:
Paciente em domic\xEDlio h\xE1 15 dias p\xF3s-alta hospitalar.
Cuidadora: Maria Silva (filha) - Tel: (11) 98765-4321
M\xE9dico respons\xE1vel: Dr. Carlos Santos - CRM 123456`,type:"text",showTimestamp:!0,maxHeight:"500px"})}showMedicalError(){this.toastService.medicalError("Erro na valida\xE7\xE3o de prescri\xE7\xE3o m\xE9dica",{title:"Log de Erro - Sistema de Prescri\xE7\xF5es",content:`{
  "timestamp": "2024-07-13T14:30:25.123Z",
  "error_code": "PRESC_001",
  "error_type": "ValidationError",
  "patient_id": "PAT-2024-5678",
  "prescription_id": "PRESC-2024-9012",
  "details": {
    "medication": "Warfarina 5mg",
    "dosage": "1 comprimido/dia",
    "duration": "30 dias",
    "prescriber": "Dr. Ana Costa - CRM 987654"
  },
  "validation_errors": [
    {
      "field": "drug_interaction",
      "message": "Intera\xE7\xE3o detectada com Amiodarona",
      "severity": "HIGH",
      "recommendation": "Ajustar dose ou substituir medica\xE7\xE3o"
    },
    {
      "field": "allergy_check",
      "message": "Paciente possui alergia a anticoagulantes",
      "severity": "CRITICAL",
      "recommendation": "Contraindicado - buscar alternativa"
    }
  ],
  "system_info": {
    "module": "PrescriptionValidator",
    "version": "2.1.3",
    "server": "HC-PROD-01"
  }
}`,type:"json",showTimestamp:!0,maxHeight:"400px"})}showTreatmentSuccess(){this.toastService.treatmentSuccess("Tratamento de fisioterapia conclu\xEDdo com sucesso",{title:"Relat\xF3rio de Tratamento - Fisioterapia",content:`<div class="space-y-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-bold text-green-800">Paciente: Maria Santos</h3>
            <p class="text-sm text-green-700">Registro: HC-2024-002468 | Idade: 72 anos</p>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Diagn\xF3stico:</h4>
            <p>Fratura de f\xEAmur direito p\xF3s-cir\xFArgica com limita\xE7\xE3o de movimento</p>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Per\xEDodo de Tratamento:</h4>
            <p>15/05/2024 a 13/07/2024 (60 dias)</p>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Sess\xF5es Realizadas:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>24 sess\xF5es de fisioterapia motora</li>
              <li>12 sess\xF5es de hidroterapia</li>
              <li>8 sess\xF5es de eletroterapia</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Resultados Obtidos:</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-blue-50 p-3 rounded">
                <p class="text-sm font-medium">Amplitude de Movimento</p>
                <p class="text-lg text-blue-600">Inicial: 30\xB0 \u2192 Final: 120\xB0</p>
              </div>
              <div class="bg-blue-50 p-3 rounded">
                <p class="text-sm font-medium">For\xE7a Muscular</p>
                <p class="text-lg text-blue-600">Inicial: 2/5 \u2192 Final: 4/5</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-2">Recomenda\xE7\xF5es:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>Manter exerc\xEDcios domiciliares di\xE1rios</li>
              <li>Retorno em 30 dias para avalia\xE7\xE3o</li>
              <li>Evitar sobrecarga no membro afetado</li>
            </ul>
          </div>
        </div>`,type:"html",showTimestamp:!0,maxHeight:"600px"})}showSystemInfo(){this.toastService.systemInfo("Sistema atualizado para vers\xE3o 3.2.1",{title:"Detalhes da Atualiza\xE7\xE3o do Sistema",content:`VERS\xC3O: 3.2.1
DATA: 13/07/2024
TIPO: Atualiza\xE7\xE3o de Seguran\xE7a e Funcionalidades

NOVAS FUNCIONALIDADES:
\u2713 Sistema de notifica\xE7\xF5es com detalhes expandidos
\u2713 Relat\xF3rios m\xE9dicos em tempo real
\u2713 Integra\xE7\xE3o com dispositivos IoT para monitoramento
\u2713 Dashboard aprimorado para gest\xE3o de pacientes
\u2713 M\xF3dulo de telemedicina integrado

CORRE\xC7\xD5ES DE SEGURAN\xC7A:
\u2713 Corre\xE7\xE3o de vulnerabilidade no sistema de autentica\xE7\xE3o
\u2713 Melhoria na criptografia de dados sens\xEDveis
\u2713 Atualiza\xE7\xE3o de depend\xEAncias de seguran\xE7a
\u2713 Implementa\xE7\xE3o de auditoria de acessos

MELHORIAS DE PERFORMANCE:
\u2713 Otimiza\xE7\xE3o de consultas ao banco de dados
\u2713 Redu\xE7\xE3o de 40% no tempo de carregamento
\u2713 Melhoria no sistema de cache
\u2713 Compress\xE3o de assets est\xE1ticos

COMPATIBILIDADE:
\u2713 Chrome 90+
\u2713 Firefox 88+
\u2713 Safari 14+
\u2713 Edge 90+

PR\xD3XIMAS ATUALIZA\xC7\xD5ES:
- M\xF3dulo de IA para predi\xE7\xE3o de riscos
- Integra\xE7\xE3o com laborat\xF3rios externos
- App mobile para cuidadores`,type:"text",showTimestamp:!0,maxHeight:"500px"})}showMedicationAlert(){this.toastService.patientAlert("Hor\xE1rio de medica\xE7\xE3o: Insulina NPH",{title:"Protocolo de Medica\xE7\xE3o - Diabetes",content:`PACIENTE: Rosa Lima
IDADE: 58 anos
DIAGN\xD3STICO: Diabetes Mellitus Tipo 2

MEDICA\xC7\xC3O ATUAL:
\u{1F558} Insulina NPH 24 UI - Subcut\xE2nea
\u23F0 Hor\xE1rio: 08:00 (ATRASADO - 14:32)

\xDALTIMAS GLICEMIAS:
- 13/07 06:00: 180 mg/dL (\u2191 Alto)
- 12/07 18:00: 165 mg/dL (\u2191 Alto)
- 12/07 12:00: 195 mg/dL (\u2191 Alto)

PROTOCOLO DE APLICA\xC7\xC3O:
1. Verificar glicemia capilar
2. Preparar seringa com insulina NPH
3. Aplicar em regi\xE3o abdominal (rod\xEDzio)
4. Registrar hor\xE1rio e dose aplicada
5. Agendar pr\xF3xima verifica\xE7\xE3o

OBSERVA\xC7\xD5ES IMPORTANTES:
\u26A0\uFE0F Paciente em jejum desde 22:00 de ontem
\u26A0\uFE0F Verificar sinais de hipoglicemia
\u26A0\uFE0F Manter carboidrato de a\xE7\xE3o r\xE1pida pr\xF3ximo

CONTATOS DE EMERG\xCANCIA:
- M\xE9dico: Dr. Pedro Oliveira - (11) 99999-1234
- Farm\xE1cia: Droga Mais - (11) 3333-5678
- Emerg\xEAncia: SAMU 192`,type:"text",showTimestamp:!0,maxHeight:"500px"})}showVitalSignsAlert(){this.toastService.medicalError("Sinais vitais cr\xEDticos detectados",{title:"Alerta Cr\xEDtico - Monitoramento Vital",content:`{
  "patient": {
    "name": "Carlos Mendoza",
    "age": 74,
    "id": "PAT-2024-7890",
    "condition": "P\xF3s-operat\xF3rio de cirurgia card\xEDaca"
  },
  "vital_signs": {
    "timestamp": "2024-07-13T14:35:12Z",
    "blood_pressure": {
      "systolic": 220,
      "diastolic": 120,
      "status": "CRITICAL_HIGH",
      "normal_range": "120-139/80-89"
    },
    "heart_rate": {
      "bpm": 45,
      "status": "CRITICAL_LOW",
      "normal_range": "60-100"
    },
    "oxygen_saturation": {
      "percentage": 85,
      "status": "LOW",
      "normal_range": "95-100"
    },
    "temperature": {
      "celsius": 39.2,
      "status": "HIGH",
      "normal_range": "36.1-37.2"
    }
  },
  "alerts": [
    {
      "type": "HYPERTENSIVE_CRISIS",
      "priority": "CRITICAL",
      "action": "Administrar anti-hipertensivo de emerg\xEAncia"
    },
    {
      "type": "BRADYCARDIA",
      "priority": "CRITICAL",
      "action": "Verificar ritmo card\xEDaco - ECG imediato"
    },
    {
      "type": "HYPOXEMIA",
      "priority": "HIGH",
      "action": "Aumentar O2 suplementar para 4L/min"
    }
  ],
  "recommendations": [
    "Contactar m\xE9dico cardiologista IMEDIATAMENTE",
    "Preparar medica\xE7\xE3o de emerg\xEAncia",
    "Monitorar sinais vitais a cada 5 minutos",
    "Preparar para poss\xEDvel transfer\xEAncia para UTI"
  ]
}`,type:"json",showTimestamp:!0,maxHeight:"500px"})}showHtmlDetails(){this.toastService.info("Exemplo de detalhes em HTML",{details:{title:"Conte\xFAdo HTML Exemplo",content:`<div class="space-y-4">
            <h3 class="text-lg font-bold text-blue-600">T\xEDtulo Principal</h3>
            <p>Este \xE9 um exemplo de conte\xFAdo HTML que pode ser exibido nos detalhes.</p>
            <ul class="list-disc list-inside">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <div class="bg-yellow-100 p-3 rounded">
              <strong>Aten\xE7\xE3o:</strong> Este \xE9 um destaque importante!
            </div>
          </div>`,type:"html"}})}showJsonDetails(){this.toastService.info("Dados t\xE9cnicos dispon\xEDveis",{details:{title:"Dados JSON",content:JSON.stringify({user:"Jo\xE3o Silva",timestamp:new Date().toISOString(),data:{vitals:{heartRate:72,bloodPressure:"120/80",temperature:36.5},medications:[{name:"Losartana",dose:"50mg",frequency:"1x/dia"},{name:"Metformina",dose:"850mg",frequency:"2x/dia"}]}}),type:"json"}})}showWithActions(){this.toastService.warning("A\xE7\xE3o necess\xE1ria do usu\xE1rio",{details:{title:"A\xE7\xF5es Dispon\xEDveis",content:"Este exemplo mostra como adicionar bot\xF5es de a\xE7\xE3o no modal de detalhes.",actions:[{label:"Aprovar",action:()=>{this.toastService.success("A\xE7\xE3o aprovada!")},type:"success"},{label:"Rejeitar",action:()=>{this.toastService.error("A\xE7\xE3o rejeitada!")},type:"error"},{label:"Mais Info",action:()=>{this.toastService.info("Informa\xE7\xF5es adicionais...")},type:"primary"}]}})}clearAll(){this.toastService.clear()}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=c({type:r,selectors:[["app-toast-demo"]],decls:44,vars:0,consts:[[1,"min-h-screen","bg-gray-100","p-8"],[1,"max-w-4xl","mx-auto"],[1,"text-3xl","font-bold","text-gray-900","mb-8"],[1,"bg-white","rounded-lg","shadow-md","p-6","mb-8"],[1,"text-xl","font-semibold","text-gray-800","mb-4"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-4","gap-4"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-error",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-info",3,"click"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"bg-white","rounded-lg","shadow-md","p-6"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-ghost",3,"click"]],template:function(n,o){n&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Sistema de Notifica\xE7\xF5es - Homecare"),t(),e(4,"div",3)(5,"h2",4),i(6,"Notifica\xE7\xF5es B\xE1sicas"),t(),e(7,"div",5)(8,"button",6),a("click",function(){return o.showSuccess()}),i(9," Sucesso "),t(),e(10,"button",7),a("click",function(){return o.showError()}),i(11," Erro "),t(),e(12,"button",8),a("click",function(){return o.showWarning()}),i(13," Aviso "),t(),e(14,"button",9),a("click",function(){return o.showInfo()}),i(15," Informa\xE7\xE3o "),t()()(),e(16,"div",3)(17,"h2",4),i(18,"Notifica\xE7\xF5es com Detalhes - Homecare"),t(),e(19,"div",10)(20,"button",8),a("click",function(){return o.showPatientAlert()}),i(21," Alerta de Paciente "),t(),e(22,"button",7),a("click",function(){return o.showMedicalError()}),i(23," Erro M\xE9dico "),t(),e(24,"button",6),a("click",function(){return o.showTreatmentSuccess()}),i(25," Tratamento Conclu\xEDdo "),t(),e(26,"button",9),a("click",function(){return o.showSystemInfo()}),i(27," Info do Sistema "),t(),e(28,"button",8),a("click",function(){return o.showMedicationAlert()}),i(29," Alerta de Medica\xE7\xE3o "),t(),e(30,"button",7),a("click",function(){return o.showVitalSignsAlert()}),i(31," Sinais Vitais Cr\xEDticos "),t()()(),e(32,"div",11)(33,"h2",4),i(34,"Exemplos Avan\xE7ados"),t(),e(35,"div",10)(36,"button",9),a("click",function(){return o.showHtmlDetails()}),i(37," Detalhes HTML "),t(),e(38,"button",9),a("click",function(){return o.showJsonDetails()}),i(39," Detalhes JSON "),t(),e(40,"button",12),a("click",function(){return o.showWithActions()}),i(41," Com A\xE7\xF5es "),t(),e(42,"button",13),a("click",function(){return o.clearAll()}),i(43," Limpar Tudo "),t()()()()())},dependencies:[d],encapsulation:2})}return r})();export{b as ToastDemoComponent};
