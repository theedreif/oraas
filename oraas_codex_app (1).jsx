import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Activity, Lock, Unlock, ArrowRight, Gauge, ShieldCheck, Workflow, Zap } from "lucide-react";

const layers = [
  {
    id: "vendor",
    title: "Vendor Model",
    subtitle: "Minimization Protocol",
    tone: "blocked",
    steps: ["Vendor", "L&D Budget", "Cost Center"],
    outcome: "Barrier: Cost-center bottleneck. Access denied.",
    metrics: { velocity: "Low", latency: "High", risk: "Unmitigated", telemetry: "Meaningless green" },
  },
  {
    id: "sovereign",
    title: "Sovereign Expert Flow",
    subtitle: "Operations Integration Protocol",
    tone: "secured",
    steps: ["Sovereign Expert", "COO", "Risk / Operations P&L", "Workflow"],
    outcome: "Pathway secured. Critical flow established.",
    metrics: { velocity: "Max", latency: "Zero", risk: "Active mitigation", telemetry: "Stable" },
  },
];

const scenarioCards = [
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Logic Anchor",
    copy: "Capture the expert's trigger, filter, and anchor so the system knows what matters under pressure.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Synthetic Friction",
    copy: "Inject noise, time pressure, missing data, and conflicting signals before reality does.",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Telemetry Layer",
    copy: "Track latency, path deviation, confidence, and stability instead of completion records.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Variance Mitigation",
    copy: "Sell operational risk reduction, not seats, courses, or content assets.",
  },
];

function FlowLane({ layer }) {
  const blocked = layer.tone === "blocked";
  return (
    <Card className={`overflow-hidden rounded-2xl border ${blocked ? "border-orange-400/40 bg-orange-50" : "border-slate-700 bg-slate-950 text-white"}`}>
      <CardContent className="p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight">{layer.title}</h3>
            <p className={`text-xs uppercase tracking-widest ${blocked ? "text-slate-600" : "text-slate-300"}`}>{layer.subtitle}</p>
          </div>
          <Badge variant={blocked ? "destructive" : "secondary"} className="rounded-full">
            {blocked ? <Lock className="mr-1 h-3 w-3" /> : <Unlock className="mr-1 h-3 w-3" />}
            {blocked ? "Blocked" : "Secured"}
          </Badge>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {layer.steps.map((step, index) => (
            <React.Fragment key={step}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`min-h-20 flex-1 rounded-xl border p-4 text-center shadow-sm ${blocked ? "border-slate-300 bg-white" : "border-amber-400/40 bg-slate-900 shadow-amber-500/10"}`}
              >
                <div className="text-sm font-black uppercase tracking-wide">{step}</div>
              </motion.div>
              {index < layer.steps.length - 1 && <ArrowRight className={`mx-auto h-6 w-6 ${blocked ? "text-slate-500" : "text-amber-300"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className={`mt-4 rounded-xl border p-4 ${blocked ? "border-orange-300 bg-orange-100" : "border-emerald-400/30 bg-emerald-950/30"}`}>
          <div className="flex items-center gap-2 text-sm font-black uppercase">
            {blocked ? <AlertTriangle className="h-4 w-4" /> : <Gauge className="h-4 w-4" />}
            {layer.outcome}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
            {Object.entries(layer.metrics).map(([key, value]) => (
              <div key={key} className={`rounded-lg p-3 ${blocked ? "bg-white/70" : "bg-slate-900/70"}`}>
                <div className="uppercase tracking-widest opacity-60">{key}</div>
                <div className="mt-1 font-bold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ORaaSCodexApp() {
  const [mode, setMode] = useState("sovereign");
  const activeLayer = useMemo(() => layers.find((l) => l.id === mode), [mode]);

  return (
    <div className="min-h-screen bg-[#f3efe2] p-4 text-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl">
        <motion.header initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-b-4 border-slate-950 pb-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-slate-600">Architectural Readout // ORaaS Protocol Active</p>
              <h1 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-6xl">Operational Readiness-as-a-Service</h1>
            </div>
            <Badge className="w-fit rounded-none bg-slate-950 px-4 py-2 font-mono uppercase text-white">Telemetry Stable</Badge>
          </div>
        </motion.header>

        <main className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            <Tabs value={mode} onValueChange={setMode}>
              <TabsList className="grid w-full grid-cols-2 rounded-xl bg-slate-200 p-1">
                <TabsTrigger value="vendor">Vendor Model</TabsTrigger>
                <TabsTrigger value="sovereign">Sovereign Expert</TabsTrigger>
              </TabsList>
            </Tabs>

            <FlowLane layer={activeLayer} />

            <Card className="rounded-2xl border-2 border-slate-950 bg-white shadow-lg">
              <CardContent className="p-6">
                <p className="text-center font-mono text-lg font-bold leading-relaxed md:text-xl">
                  “I am not here to train your team. I am here to install a digital version of my best operator’s judgment directly into your workflow, so your newest hire never makes a five-million-dollar mistake.”
                </p>
              </CardContent>
            </Card>
          </section>

          <aside className="space-y-4">
            <Card className="rounded-2xl border-2 border-slate-950 bg-slate-950 text-white">
              <CardContent className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-300">System Doctrine</p>
                <h2 className="mt-2 text-3xl font-black uppercase">Stop Selling Content.</h2>
                <p className="mt-3 text-lg text-slate-300">Start selling continuous mitigation of variance.</p>
                <Button className="mt-5 w-full rounded-xl bg-amber-300 font-black uppercase text-slate-950 hover:bg-amber-200">Run Readiness Loop</Button>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {scenarioCards.map((card) => (
                <Card key={card.title} className="rounded-2xl border border-slate-300 bg-white/80 shadow-sm backdrop-blur">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-slate-950 p-2 text-amber-300">{card.icon}</div>
                      <h3 className="font-black uppercase">{card.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{card.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        </main>

        <footer className="mt-6 border-t-4 border-slate-950 pt-4 font-mono text-xs uppercase tracking-widest text-slate-600">
          Critical Flow Unlocked // Sovereign Expert Access Granted // Variance Mitigation Active
        </footer>
      </div>
    </div>
  );
}
