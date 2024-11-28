#include<stdio.h>
#define MAX 1000001

int a[MAX];

int main(void){
	a[1]=1;
	for(int i=2; i<MAX; i++){
		for(int j= i+i; j<MAX; j+=i){
			if(a[j]==1) continue;
			else a[j]=1;
		}
	}
	
	while(1){
	int n;
	int count=0;
	scanf("%d" ,&n);
	if(n==0) break;
	for(int i=2; i<n; i++){
		
			if(a[i]==0 && a[n-i]==0 ){
				count++;
				if(count==1){
		        printf("%d = %d + %d\n", n, i, n-i);
		        break;
		    }
			}
		 
}
		if(count ==0) printf("Goldbach's conjecture is wrong.");
			
}
return 0;
}