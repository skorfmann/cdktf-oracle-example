// https://www.terraform.io/docs/providers/oci/r/datascience_model_provenance.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "git_branch": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "git_commit": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "model_id": {
        "type": "string",
        "required": true
      },
      "repository_url": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "script_dir": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "training_script": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatascienceModelProvenanceConfig extends TerraformMetaArguments {
  readonly gitBranch?: string;
  readonly gitCommit?: string;
  readonly modelId: string;
  readonly repositoryUrl?: string;
  readonly scriptDir?: string;
  readonly trainingScript?: string;
  /** timeouts block */
  readonly timeouts?: DatascienceModelProvenanceTimeouts;
}
export interface DatascienceModelProvenanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatascienceModelProvenance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatascienceModelProvenanceConfig) {
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
    this._gitBranch = config.gitBranch;
    this._gitCommit = config.gitCommit;
    this._modelId = config.modelId;
    this._repositoryUrl = config.repositoryUrl;
    this._scriptDir = config.scriptDir;
    this._trainingScript = config.trainingScript;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_branch - computed: true, optional: true, required: false
  private _gitBranch?: string;
  public get gitBranch() {
    return this._gitBranch ?? this.getStringAttribute('git_branch');
  }
  public set gitBranch(value: string | undefined) {
    this._gitBranch = value;
  }

  // git_commit - computed: true, optional: true, required: false
  private _gitCommit?: string;
  public get gitCommit() {
    return this._gitCommit ?? this.getStringAttribute('git_commit');
  }
  public set gitCommit(value: string | undefined) {
    this._gitCommit = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId: string;
  public get modelId() {
    return this._modelId;
  }
  public set modelId(value: string) {
    this._modelId = value;
  }

  // repository_url - computed: true, optional: true, required: false
  private _repositoryUrl?: string;
  public get repositoryUrl() {
    return this._repositoryUrl ?? this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string | undefined) {
    this._repositoryUrl = value;
  }

  // script_dir - computed: true, optional: true, required: false
  private _scriptDir?: string;
  public get scriptDir() {
    return this._scriptDir ?? this.getStringAttribute('script_dir');
  }
  public set scriptDir(value: string | undefined) {
    this._scriptDir = value;
  }

  // training_script - computed: true, optional: true, required: false
  private _trainingScript?: string;
  public get trainingScript() {
    return this._trainingScript ?? this.getStringAttribute('training_script');
  }
  public set trainingScript(value: string | undefined) {
    this._trainingScript = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatascienceModelProvenanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatascienceModelProvenanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      git_branch: this._gitBranch,
      git_commit: this._gitCommit,
      model_id: this._modelId,
      repository_url: this._repositoryUrl,
      script_dir: this._scriptDir,
      training_script: this._trainingScript,
      timeouts: this._timeouts,
    };
  }
}
