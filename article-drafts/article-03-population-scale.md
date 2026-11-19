---
title: Reading the Genome at Population Scale
description: Large cohorts have made human genetic variation readable at scale. The open question is whether that signal changes decisions in a clinic.
keywords: population genomics, whole-genome sequencing, polygenic risk score, variants of uncertain significance
---

# Reading the Genome at Population Scale

Sequencing a human genome was once a national-scale project. It is now routine, cheap, and fast. The harder step has not moved at the same speed. Obtaining a sequence is an engineering problem, and deciding what it means is still a clinical one.

## What the cohorts now contain

Two large resources set the current scale. UK Biobank reported whole-genome sequencing of 490,640 participants in August 2025, describing new associations in participants of African and Asian ancestries alongside a much larger body of findings in participants of European ancestry. The All of Us Research Program reported 245,388 clinical-grade genome sequences, from which it identified more than 1 billion genetic variants. More than 275 million of those variants had not been reported before, and more than 3.9 million carried coding consequences.

A sequence becomes evidence only when it can be compared against other sequences. Rare variants are invisible in small samples: a variant carried by one person in a thousand needs thousands of people before it can be associated with anything. That arithmetic is what drives cohort size.

Whole-genome sequencing reaches what genotyping arrays and exome sequencing cannot. It captures structural variants and exonic variation in both coding and untranslated regions, which is why the UK Biobank release strengthened and extended findings that earlier exome analyses had missed.

The diversity of All of Us is a design decision rather than a side effect. Seventy-seven percent of participants come from communities historically under-represented in biomedical research, and 46 percent are from under-represented racial and ethnic minorities. Using linked electronic health records, the program tested 3,724 genetic variants against 117 diseases and reported high replication rates in both European-ancestry and African-ancestry participants.

## Where interpretation still fails

A sequence is useful only if the variants in it can be classified. A study of more than 1.5 million sequencing test results from 19 clinical laboratories in North America, covering 2020 to 2021, measured how often classification fails. Results came back inconclusive because of variants of uncertain significance in 32.6 percent of multi-gene panel tests, compared with 22.5 percent for exome and genome sequencing (P < .0001).

The rate moved with context. Sequencing parents alongside the affected person, known as trio testing, reduced inconclusive results from 27.6 percent to 18.9 percent (P < .001). Genome sequencing performed no better than exome sequencing on this measure, at 22.2 percent versus 22.6 percent, and among multi-gene panels the inconclusive rate rose with panel size.

That is the tension at population scale. Cohorts produce variant data far faster than variant classification can resolve it, so every uncertain result is a person waiting on an answer the data cannot yet give.

## What polygenic scores add

A polygenic risk score combines many small genetic effects into a single number. The practical question is whether adding one to a standard clinical risk score changes who gets identified as high risk. The GENVASC study, embedded in the English National Health Service Health Check program, followed 44,141 people aged 40 to 74 across 147 general practices between 2012 and 2020.

The primary analysis was a nested case-control study: 195 people who went on to have a major cardiovascular event, matched with 396 controls of similar risk profile. The standard QRISK2 score identified 61.5 percent of those who later had an event as high risk (95 percent confidence interval 54.3 to 68.4). Adding the genetic score raised that to 68.7 percent (95 percent confidence interval 61.7 to 75.2), a relative increase of 11.7 percent.

The effect was larger in younger people. Among those aged 40 to 54, QRISK2 identified 26.0 percent of future cases (95 percent confidence interval 16.5 to 37.6); with the genetic score, 38.4 percent (95 percent confidence interval 27.2 to 50.5), a relative increase of 47.7 percent. The absolute gain was smallest in the oldest age groups.

The study design also sets the bound. A nested case-control study samples a fixed number of cases and controls, so it can estimate how often a risk score classifies people correctly but not how well the score would perform across an unselected population. Two further details shape how far the result travels: the additional cases identified were similar in women and men, and in non-white participants compared with white participants, and the findings held when the genetic score was added to two other clinical risk scores, ASCVD-PCE and SCORE2.

## What the clinic can absorb

The polygenic result is the most concrete advance in this set, and it measures something narrower than it appears to. GENVASC recorded whether a person was labeled high risk at their health check. It did not measure whether that label changed treatment or prevented an event.

What is not yet known is whether integrating genetic risk into routine assessment changes outcomes rather than categories. A score that moves people across a threshold is only useful if acting on the new label helps them. Answering that requires studies that follow participants through to events, not studies that count reclassified cases.

A second open question is transferability. A polygenic score is trained on the populations that dominate genetic research, and it is not yet known how much predictive accuracy is lost when the same score is applied to ancestries that contributed little to its training data. The UK Biobank release at least suggests where the missing signal sits: most associations with disease traits were still observed primarily in participants of European ancestries, while strong or novel signals also appeared in participants of African and Asian ancestries.

## Summary

Population-scale sequencing has produced large and genuinely diverse datasets, and a persistent interpretation gap limits what they can deliver at the bedside.

- **Cohort scale** is now measured in hundreds of thousands of whole genomes, with UK Biobank reporting 490,640 participants and All of Us reporting 245,388.
- **Interpretation limits that scale.** In one study of 19 laboratories, 32.6 percent of multi-gene panel results and 22.5 percent of exome and genome results were inconclusive because of variants of uncertain significance.
- **Polygenic scores add measurable information.** Adding a cardiovascular genetic score to QRISK2 raised detection of future cases from 61.5 percent to 68.7 percent, and from 26.0 percent to 38.4 percent in people aged 40 to 54.
- **The measured gain is classification, not outcome.** No study in this set shows that the reclassification prevented an event.
- **Transferability is unsettled.** Most disease associations in the largest cohort were still observed primarily in participants of European ancestry.

Scale has improved measurement. Whether it improves care is not yet known.

## Sources

- UK Biobank Whole-Genome Sequencing Consortium. Whole-genome sequencing of 490,640 UK Biobank participants. *Nature* 645:692-701 (2025). https://pubmed.ncbi.nlm.nih.gov/40770095/
- All of Us Research Program Genomics Investigators. Genomic data in the All of Us Research Program. *Nature* 627:340-346 (2024). https://pubmed.ncbi.nlm.nih.gov/38374255/
- Rehm HL, et al. The landscape of reported VUS in multi-gene panel and genomic testing: Time for a change. *Genetics in Medicine* 25(12):100947 (2023). https://pubmed.ncbi.nlm.nih.gov/37534744/
- Samani NJ, et al. Polygenic risk score adds to a clinical risk score in the prediction of cardiovascular disease in a clinical setting. *European Heart Journal* 45(34):3152-3160 (2024). https://pubmed.ncbi.nlm.nih.gov/38848106/

---

*Fibios publishes analysis, not medical advice. Nothing here should be used to make a treatment decision; consult a qualified clinician.*

[About Fibios](about.md) · [Contact the editors](contact.md) · [Back to the homepage](index.md)
