---
title: Models That Propose Molecules
description: Generative models now suggest drug candidates faster than laboratories can test them. The constraint has moved from finding ideas to clearing assays.
keywords: generative chemistry, drug discovery, antibiotic discovery, clinical trials
---

# Models That Propose Molecules

A generative model can write down more plausible drug molecules in an afternoon than a laboratory can test in a year. That asymmetry is the defining feature of the field. The computational half of drug discovery has become fast, and the physical half has not moved at the same rate.

## What the models produce

The clearest demonstrations come from antibiotic discovery, where the target is well understood and the reference compounds are numerous. In 2020, a deep neural network trained to predict antibacterial activity was applied to more than 107 million molecules drawn from several chemical libraries. It identified halicin, a molecule from the Drug Repurposing Hub that is structurally divergent from conventional antibiotics and active against a wide range of pathogens in mouse models of infection. Measured separately, 23 of its predictions were tested at the bench, and eight of those proved to be antibacterial compounds structurally distant from known antibiotics.

A later study extended the approach by making the model's reasoning inspectable. Researchers measured antibiotic activity and human cell toxicity across 39,312 compounds, then used ensembles of graph neural networks to predict both properties for 12,076,365 compounds. The model pointed to chemical substructures associated with selective activity rather than to single molecules, which is how medicinal chemists define a structural class. From that output, 283 compounds were tested in the laboratory, and one structural class proved active against methicillin-resistant *Staphylococcus aureus* and vancomycin-resistant enterococci, retained activity against resistant mutants, and reduced bacterial counts in mouse models of skin and systemic infection.

Model performance is not the same as biological truth. The graph neural network ensemble reached an area under the precision-recall curve of 0.364 on withheld test data, a figure that reflects how heavily the dataset is weighted toward inactive compounds. A model that is wrong about most molecules can still be useful, provided the fraction it gets right is the fraction worth testing.

## Where the bottleneck moved

The numbers show where the effort went. Twelve million compounds were scored computationally, 283 were carried into a laboratory, and a small number of structural classes emerged. The model did not remove the need for bench work. It changed which bench work was worth doing, by concentrating attention on a fraction of chemical space that arithmetic alone could not prioritize.

Assay capacity is the binding constraint, and it is measured in hundreds of compounds, not millions. Every prediction that reaches a plate costs reagents, technician time, and weeks. A model that improves its hit rate by a large factor is valuable primarily because it shortens that queue. The urgency behind the antibiotic work is not commercial. The same 2024 paper notes that global deaths from resistant infections are projected to reach 10 million per year by 2050 if new antibiotics do not arrive.

The clinical record is thinner than the computational one. One analysis of AI-native drug pipelines found a Phase I success rate of 80 to 90 percent, which the authors describe as substantially higher than historic industry averages, and a Phase II success rate near 40 percent, comparable to those averages. The paper reports the baseline only in words, not as a figure. The authors stated the small sample size themselves and drew a narrower conclusion than the headline number invites: the Phase I result suggests the models are good at finding molecules with drug-like properties, which is not the same as finding molecules that work.

## What has reached patients

Fewer molecules have completed trials than have been proposed. DSP-1181, a serotonin receptor agonist for obsessive-compulsive disorder designed by an AI platform, entered Phase I testing in Japan in 2020 as one of the first AI-designed molecules to reach human testing. Development was later discontinued after the compound failed to meet internal progression criteria.

The most advanced clinical result is rentosertib, an inhibitor of the kinase TNIK for idiopathic pulmonary fibrosis. The phase 2a trial was multicenter, double-blind, randomized and placebo-controlled, assigning patients to 30 mg once daily, 30 mg twice daily, 60 mg once daily, or placebo for 12 weeks. Forced vital capacity, the standard measure of lung function in this disease, rose by a mean of 98.4 ml (95 percent confidence interval 10.9 to 185.9) in the 60 mg once-daily group, against a mean decline of 20.3 ml (95 percent confidence interval minus 116.1 to 75.6) in the placebo group.

The trial's primary endpoint was safety, not efficacy. Rates of at least one treatment-emergent adverse event were similar across arms: 72.2 percent for 30 mg once daily, 83.3 percent for 30 mg twice daily, 83.3 percent for 60 mg once daily, and 70.6 percent for placebo. Liver toxicity and diarrhea were the most common events leading to treatment discontinuation.

## What the field does not yet know

The open question is whether AI-designed molecules reach approval more often than conventionally designed ones. Phase I success rates are encouraging and rest on a small number of compounds. Phase II results so far resemble the industry norm, and Phase II is where most drug programs have always failed. Whether the Phase I advantage survives into later stages, on a larger cohort of drugs, is not yet known.

A second unknown is whether the advantage travels outside the settings where it has been demonstrated. Antibiotic discovery offers a clean signal, because activity can be measured directly in a dish and resistance can be tested in the same system. Whether the same models compress timelines for targets whose biology is uncertain, or for diseases without a reliable laboratory readout, has not been established. One positive result in a single lung disease does not settle it.

## Summary

Generative models have become good at proposing molecules, and the evidence that they improve patient outcomes is still being assembled.

- **Screening scale has changed.** A single study predicted antibiotic activity and human cell toxicity for 12,076,365 compounds from 39,312 measured examples.
- **The laboratory is still the filter.** Of those 12 million predictions, 283 compounds were tested, and one structural class advanced to mouse infection models.
- **Phase I results are strong, Phase II is not.** An analysis of AI-native pipelines found 80 to 90 percent Phase I success, described as substantially above historic industry averages, and roughly 40 percent at Phase II.
- **One drug has reported a positive efficacy signal.** Rentosertib raised forced vital capacity by a mean of 98.4 ml in a 71-patient phase 2a trial whose primary endpoint was safety.
- **Attrition has already occurred.** DSP-1181, among the first AI-designed molecules to enter human testing, was discontinued.

Prediction has made the library bigger. Whether it makes the medicine better is not yet known.

## Sources

- Stokes JM, et al. A Deep Learning Approach to Antibiotic Discovery. *Cell* 180(4):688-702 (2020). https://pubmed.ncbi.nlm.nih.gov/32084340/
- Wong F, et al. Discovery of a structural class of antibiotics with explainable deep learning. *Nature* 626:177-185 (2024). https://pubmed.ncbi.nlm.nih.gov/38123686/
- Jayatunga MKP, et al. How successful are AI-discovered drugs in clinical trials? A first analysis and emerging lessons. *Drug Discovery Today* 29(6):104009 (2024). https://pubmed.ncbi.nlm.nih.gov/38692505/
- Xu Z, et al. A generative AI-discovered TNIK inhibitor for idiopathic pulmonary fibrosis: a randomized phase 2a trial. *Nature Medicine* 31:2602-2610 (2025). https://pubmed.ncbi.nlm.nih.gov/40461817/
- Gosset. DSP-1181: small molecule for Obsessive-compulsive disorder. https://gosset.ai/drugs/dsp-1181

---

*Fibios publishes analysis, not medical advice. Nothing here should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
