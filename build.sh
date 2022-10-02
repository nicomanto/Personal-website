#!/bin/bash
echo SETUP DATE NOW EN VAR
export NEXT_PUBLIC_DATE_NOW=`date +%d/%m/%Y`
echo BUILD
next build