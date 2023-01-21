
#nestjs #트러블슈팅

🚨 typeorm 0.3 버전 이후로 없어진 EntityRepository ....
	강의를 따라 기초 nestjs 공부중 첫번째 트러블에 봉착...
	![](https://i.imgur.com/TkEtwvk.png)

![](https://i.imgur.com/k8j6KmS.png)

EntityRepository 라는게 deprecated 라고 한다.. 
강의에서는 잘 되던데...
  
'Entity Repository'는 더 이상 사용되지 않습니다. ....사용 되지 않습니다....

이제 막 시작한 사람에게 사용되지 않는다고 하면,,,

검색을 시작하니 나만 겪는 문제가 아니었다.
[참조 블로그 - 테크놀리지넥](https://velog.io/@pk3669/typeorm-0.3.x-EntityRepository-%EB%8F%8C%EB%A0%A4%EC%A4%98)

해당글을 읽어도, 다이나믹 모듈, 메타데이터, 데코레이터 제작 패턴 등등.....
1도 모르겠는 개념들이 나를 반긴다.

눈치는 있어 코드를 보고 어디다 붙여야 하는지에 대한 감은 있어 코드를 복사하여 나에게 맞는 위치에 붙여넣어 작동은 되게 하였는데, 이건 붙잡고 깊게 공부해야할 부분 인것 같다.

붙여넣은 코드의 전문은 다음과 같다.


```ts
// typeorm-ex.module.ts

import { DynamicModule, Provider } from "@nestjs/common";
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { TYPEORM_EX_CUSTOM_REPOSITORY } from "./typeorm-ex.decorator";

export class TypeOrmExModule {
  public static forCustomRepository<T extends new (...args: any[]) => any>(repositories: T[]): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, repository);

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}
```