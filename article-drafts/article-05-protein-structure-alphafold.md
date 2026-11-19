---
title: Protein Structure After AlphaFold
description: Structure prediction did not end experimental biology. It changed which structures are worth solving in a laboratory first.
keywords: protein structure prediction, AlphaFold, structural biology, experimental validation
---

# Protein Structure After AlphaFold

AlphaFold was assessed in a blind experiment and returned answers good enough to be mistaken for solved structures. Four years on, the number of structures determined in a laboratory is still rising. Both facts are true, and the second is the more informative one about how prediction is actually used.

## What the prediction achieved

The 14th Critical Assessment of Structure Prediction, known as CASP14, was designed so that participants could not see the answers. Targets were sequences whose structures had been solved experimentally but not yet published. AlphaFold2 was scored by independent assessors and reached a median domain score of 92.4 on the GDT_TS scale, which measures how closely a predicted backbone matches an experimental one. It produced high-accuracy models for 87 of 92 domains and structures on par with experimental accuracy for 58 of them.

The same assessment recorded how far ahead the method was. On summed z scores the AlphaFold2 group scored 244.0, against 90.8 for the next best entrant. The assessment community described the accuracy as competitive with experimental determination for most targets, and it was the first time this level had been reached routinely at CASP, including on the harder targets where no related structure existed to copy from.

The prediction was then applied at a scale no laboratory could match. The AlphaFold Protein Structure Database holds more than 214 million predicted structures, having grown from an initial release of about 300,000 structures in 2021. Those predictions are integrated into primary resources including the Protein Data Bank, UniProt and InterPro, which is why a predicted model now frequently appears wherever a sequence appears.

## Where the predictions mislead

A prediction is a hypothesis with a confidence score attached. A team led by Tom Terwilliger compared AlphaFold models against high-quality experimental data and experimentally determined structures, and concluded that the models are best treated as exceptionally useful hypotheses, with experimental measurement still required to confirm the details. Their result was published under a title that states the position directly: predictions are valuable hypotheses and accelerate but do not replace experimental structure determination.

Two specific failure modes are measured. The first concerns shape change. Proteins are not rigid, and many adopt different conformations depending on what they are bound to. Analysis of curated pairs of bound and unbound conformers found that AlphaFold2 predicted the ligand-bound form in about 70 percent of cases, and was unable to reproduce observed conformational diversity with equal accuracy for both forms. Performance worsened as the conformational diversity of the protein increased.

The second concerns stereochemistry. A preprint posted in 2025 tested AlphaFold 3 on D-peptides, mirror-image peptides that bind natural L-proteins. The authors note that the model is reported to hold a chirality violation rate of 4.4 percent on a general benchmark of diverse chiral molecules, then report a much higher figure for this one class: across 3,255 tests, the chirality violation rate for D-peptide binders was 51 percent, and the model was on average as accurate as choosing each residue's chirality at random. Adding more predictions did not improve the rate. The preprint should be read as a preprint: it has not completed peer review, and it tests one class of molecule rather than the model's general accuracy.

## What the laboratory now does

The archive itself shows that experimental work continues. The Protein Data Bank holds more than 227,000 experimentally determined structures, alongside more than one million computed models. Experimental determination has not stopped; what has changed is the order in which things happen.

A laboratory used to solve a structure to learn what a protein looks like. It can now ask a model first and design experiments to test the parts the model is least confident about, or the parts where the predicted shape disagrees with a measured one. Crystallographers use predicted models as search models in molecular replacement, which is the step that turns diffraction data into a structure. That reframes the experimental question from what is the shape to which of these candidate shapes is right.

Prediction also changes which experiments are attempted. A researcher who already has a plausible structure can decide whether a costly experiment is likely to resolve a disagreement, and skip the ones that would only confirm a prediction that is already reliable. This is the sense in which the archive keeps growing while the question changes. The same measurements are made, for different reasons.

The measured consequence is a change in priority, not a reduction in effort. Terwilliger's study found that prediction accelerated experimental determination, and that many predictions, or parts of predictions, did not agree with experimentally resolved data. The remaining experimental work concentrated on those disagreements. That is a narrower claim than the one usually made about the method, and it is the one the evidence supports.

## What is not yet known

The largest open question is how well these models handle the cases that matter most for drug design. Static predictions are useful for well-folded proteins with a single dominant shape. Many drug targets are neither. Whether conformational ensembles can be predicted accurately enough to guide design, rather than only to suggest where to look, is not yet known.

A second question concerns the population of structures the models were trained on. The consequence of the measured failures in D-peptides is that accuracy on one class of molecule does not transfer to another, and it is not yet known how many other classes sit in that gap. Until that is mapped, a confidence score should be read as a statement about the model's training distribution, not as a guarantee about the molecule in front of you.

## Summary

Structure prediction has changed the order of experimental work in structural biology, and the laboratory remains the arbiter of the details.

- **Blind assessment was strong.** AlphaFold2 reached a median domain GDT_TS of 92.4 at CASP14, with high-accuracy models for 87 of 92 domains.
- **Scale is unmatched experimentally.** The AlphaFold database holds more than 214 million predicted structures, against more than 227,000 experimentally determined structures in the Protein Data Bank.
- **Predictions are hypotheses.** A systematic comparison concluded they accelerate but do not replace experimental structure determination.
- **Shape change is a known weakness.** AlphaFold2 predicted the ligand-bound form in about 70 percent of conformer pairs and did not reproduce conformational diversity equally for both forms.
- **Stereochemistry can fail badly.** A 2025 preprint reported a 51 percent chirality violation rate for D-peptide binders, against 4.4 percent reported for the general benchmark.

Prediction has not ended structural biology. How far it reaches into conformational change and unusual chemistry is not yet known.

## Sources

- Jumper J, et al. Highly accurate protein structure prediction with AlphaFold. *Nature* 596:583-589 (2021). https://pmc.ncbi.nlm.nih.gov/articles/PMC8371605/
- Varadi M, et al. AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences. *Nucleic Acids Research* 52(D1):D368-D375 (2024). https://pubmed.ncbi.nlm.nih.gov/37933859/
- Abramson J, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature* 630:493-500 (2024). https://pmc.ncbi.nlm.nih.gov/articles/PMC11168924/
- Addendum: Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature* 636(8042):E4 (2024). https://pmc.ncbi.nlm.nih.gov/articles/PMC11634763/
- Terwilliger TC, et al. AlphaFold predictions are valuable hypotheses and accelerate but do not replace experimental structure determination. *Nature Methods* 21:110-116 (2024). https://pmc.ncbi.nlm.nih.gov/articles/PMC10776388/
- Saldano T, et al. Impact of protein conformational diversity on AlphaFold predictions. *Bioinformatics* 38(10):2742-2748 (2022). https://pubmed.ncbi.nlm.nih.gov/35561203/
- Childs H, Zhou P, Donald BR. AlphaFold 3 Fails to Predict D-peptide Chirality, Fold, and Binding Pose in Heterochiral Complexes. *bioRxiv* preprint (2025). https://www.biorxiv.org/content/10.1101/2025.03.14.643307v3
- Burley SK, et al. Updated resources for exploring experimentally-determined PDB structures and Computed Structure Models at the RCSB Protein Data Bank. *Nucleic Acids Research* 53(D1):D564-D574 (2025). https://pubmed.ncbi.nlm.nih.gov/39607707/

---

*Fibios publishes analysis, not medical advice. Nothing here should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
