// https://www.terraform.io/docs/providers/oci/r/data_oci_datascience_model_provenance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "git_branch": {
        "type": "string",
        "computed": true
      },
      "git_commit": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "model_id": {
        "type": "string",
        "required": true
      },
      "repository_url": {
        "type": "string",
        "computed": true
      },
      "script_dir": {
        "type": "string",
        "computed": true
      },
      "training_script": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatascienceModelProvenanceConfig extends TerraformMetaArguments {
  readonly modelId: string;
}

// Resource

export class DataOciDatascienceModelProvenance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelProvenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model_provenance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._modelId = config.modelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_branch - computed: true, optional: false, required: true
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }

  // git_commit - computed: true, optional: false, required: true
  public get gitCommit() {
    return this.getStringAttribute('git_commit');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId: string;
  public get modelId() {
    return this._modelId;
  }
  public set modelId(value: string) {
    this._modelId = value;
  }

  // repository_url - computed: true, optional: false, required: true
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // script_dir - computed: true, optional: false, required: true
  public get scriptDir() {
    return this.getStringAttribute('script_dir');
  }

  // training_script - computed: true, optional: false, required: true
  public get trainingScript() {
    return this.getStringAttribute('training_script');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      model_id: this._modelId,
    };
  }
}
