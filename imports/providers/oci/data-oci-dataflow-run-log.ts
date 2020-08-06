// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_run_log.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "base64_encode_content": {
        "type": "bool",
        "optional": true
      },
      "content": {
        "type": "string",
        "computed": true
      },
      "content_type": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "run_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDataflowRunLogConfig extends TerraformMetaArguments {
  readonly base64EncodeContent?: boolean;
  readonly name: string;
  readonly runId: string;
}

// Resource

export class DataOciDataflowRunLog extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowRunLogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_run_log',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._name = config.name;
    this._runId = config.runId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean;
  public get base64EncodeContent() {
    return this._base64EncodeContent;
  }
  public set base64EncodeContent(value: boolean | undefined) {
    this._base64EncodeContent = value;
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_type - computed: true, optional: false, required: true
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // run_id - computed: false, optional: false, required: true
  private _runId: string;
  public get runId() {
    return this._runId;
  }
  public set runId(value: string) {
    this._runId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: this._base64EncodeContent,
      name: this._name,
      run_id: this._runId,
    };
  }
}
