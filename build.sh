#!/bin/bash
echo SETUP DATE NOW VAR
export NEXT_PUBLIC_DATE_NOW=`date +%d/%m/%Y`
printenv NEXT_PUBLIC_DATE_NOW
echo BUILD
next build