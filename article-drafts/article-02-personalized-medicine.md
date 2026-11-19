---
title: The Future of Personalized Medicine in 2027
description: Sequencing is now cheap and interpretation is not. Where precision medicine actually stands in 2027, and what the next twelve months must settle.
keywords: personalized medicine 2027, AI drug discovery, precision medicine trends, genomic medicine
---

# The Future of Personalized Medicine in 2027

The central fact of personalized medicine in 2027 is a reversal. For two decades the binding constraint was reading the genome. That constraint has largely dissolved, and what replaced it is harder: interpreting what was read.

Sequencing a human genome once cost more than a house. The National Human Genome Research Institute, which has tracked the figure since 2001, recorded a cost per genome in the tens of millions of dollars at the start of its series and a cost in the low thousands by its most recent published accounting. The instrument is no longer the obstacle.

The obstacles are interpretation, evidence, and access. Any honest assessment of precision medicine trends has to start there.

## The datasets finally reached scale

Genomic medicine was always a statistical enterprise waiting for its statistics. A single genome tells a clinician very little; association between variation and disease requires hundreds of thousands of genomes with linked clinical records.

That threshold has been crossed. UK Biobank completed whole-genome sequencing across its cohort and released the data to approved researchers on 30 November 2023, and the consortium's 2025 paper in *Nature* described whole-genome sequencing of 490,640 participants. This is the substrate that polygenic risk scores, rare-variant discovery, and gene-by-environment analysis all depend on. It is also the substrate that machine learning consumes.

The consequence is a shift in what a genomic finding looks like. A decade ago, a Mendelian variant with a large effect was the prize. Today an increasing share of actionable signal is distributed across thousands of small-effect variants, which is not a kind of result a human reads without a model.

## AI drug discovery moved from promise to a trial result

The most consequential development in precision medicine is not diagnostic. It is pharmacological.

For years, AI drug discovery was represented by timelines and platform announcements. In 2025 that changed register. *Nature Medicine* published the results of a phase 2a multicenter, double-blind, randomized, placebo-controlled trial of rentosertib (formerly ISM001-055), a small-molecule TNIK inhibitor discovered using generative AI, tested in idiopathic pulmonary fibrosis. The trial randomized patients to 12 weeks of treatment across three dose arms and placebo.

The result requires careful reading. The primary endpoint — patients with at least one treatment-emergent adverse event — was similar across arms, and the paper concludes that targeting TNIK with rentosertib was safe and well tolerated and warrants investigation in larger trials. On lung function, the highest-dose group showed a mean change in forced vital capacity of +98.4 ml (95% CI 10.9 to 185.9) against −20.3 ml (95% CI −116.1 to 75.6) for placebo.

That is a signal in a small trial, not a proven therapy. The confidence intervals are wide, the study was short, and the authors themselves call for larger and longer work. What the trial establishes is narrower and still important: an AI-originated molecule with an AI-originated target completed a randomized controlled trial in patients with a readable result. The pipeline is no longer theoretical.

## What 2027 actually looks like in the clinic

Away from the trial data, the clinical picture is uneven, and precision medicine trends are best described by where the model already works.

**Oncology** remains the most mature domain. Tumor sequencing to select therapy is standard practice in many cancers, because the causal link between a specific alteration and a specific drug is direct and testable. This is personalized medicine at its most defensible: the genotype is the indication.

**Rare disease** is the second clear win. Diagnostic sequencing for undiagnosed conditions has a high yield precisely because the question is narrow — a broken gene in a small search space. AI-assisted variant interpretation has shortened the diagnostic odyssey for families, though a substantial fraction of cases still return without an answer.

**Common chronic disease** is where the field is thinnest. Polygenic risk scores are real and increasingly validated, but their clinical utility is contested: a risk score that shifts a probability by a few percentage points changes management only when an intervention exists that the score would change. Pharmacogenomics — using genotype to choose drug and dose — is better grounded and better evidenced, and remains underused relative to what the guidelines already support.

**Gene editing** has arrived as a licensed therapy for at least two indications. Casgevy, approved by the FDA on 8 December 2023, was the first approved CRISPR/Cas9 therapy; it treats sickle cell disease and transfusion-dependent beta-thalassemia, and the current label covers patients aged 2 years and older. It is personalized in the strict sense — a patient's own cells are edited — and it is also expensive, logistically demanding and limited to severe disease. It shows the ceiling of the current approach as clearly as the floor.

## The three problems that will define the next year

**Interpretation at scale.** Cheap sequencing produces variants of uncertain significance faster than clinical genetics can adjudicate them. The bottleneck is now expert review and functional evidence, not readout.

**Equity of the reference.** Genomic medicine performs best on populations represented in its training and reference data. Where a population is underrepresented, a risk score calibrated elsewhere can be actively misleading. Diversifying reference cohorts is not a gesture; it is a technical requirement for accuracy.

**Evidence standards for AI-derived medicine.** A model that proposes a target is a hypothesis generator. The rentosertib trial is instructive because it went through placebo control rather than around it. Maintaining that standard as AI accelerates the front of the pipeline is the field's central governance question.

## Summary

Personalized medicine in 2027 is not a future state. It is an uneven present.

- **Personalized medicine 2027** is limited by interpretation and access, not by sequencing cost, which NHGRI's long-running series shows has fallen by orders of magnitude since 2001.
- **Genomic medicine** now rests on population-scale resources: UK Biobank's whole-genome sequencing of 490,640 participants, released to approved researchers from November 2023.
- **AI drug discovery** has produced a randomized phase 2a result — rentosertib in idiopathic pulmonary fibrosis, published in *Nature Medicine* in 2025 — that is a real signal in a small trial, not a proven therapy.
- **Precision medicine trends** diverge sharply by domain: oncology and rare disease are mature, pharmacogenomics is underused, and polygenic risk for common disease remains contested.
- The binding constraints are variant interpretation, representation in reference data, and evidence standards for AI-derived candidates.

The genome is readable. The remaining work is the harder half: knowing what it means, for whom, and with what evidence.

## Sources

- National Human Genome Research Institute. DNA Sequencing Costs: Data. https://www.genome.gov/about-genomics/fact-sheets/DNA-Sequencing-Costs-Data
- UK Biobank Whole-Genome Sequencing Consortium. Whole-genome sequencing of 490,640 UK Biobank participants. *Nature* 645:692–701 (2025). https://www.nature.com/articles/s41586-025-09272-9
- UK Biobank. 500k Whole Genome Sequencing: general FAQs (data released 30 November 2023). https://community.ukbiobank.ac.uk/hc/en-gb/articles/25118589261213-500k-Whole-Genome-Sequencing-general-FAQs
- Xu Z, et al. A generative AI-discovered TNIK inhibitor for idiopathic pulmonary fibrosis: a randomized phase 2a trial. *Nature Medicine* 31:2602–2610 (2025). https://www.nature.com/articles/s41591-025-03743-2
- US Food and Drug Administration. FDA Approves First Gene Therapies to Treat Patients with Sickle Cell Disease (8 December 2023). https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease
- US Food and Drug Administration. CASGEVY (exagamglogene autotemcel), STN 125787 — indication. https://www.fda.gov/vaccines-blood-biologics/casgevy

---

*Fibios publishes analysis, not medical advice. Nothing in this article should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
